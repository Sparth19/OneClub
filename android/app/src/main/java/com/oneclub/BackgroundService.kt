package com.oneclub

import android.app.*
import android.content.Intent
import android.content.pm.ServiceInfo
import android.graphics.Color
import android.os.Build
import android.os.IBinder
import androidx.annotation.RequiresApi

class BackgroundService : Service() {

    private var overlayService: OverlayService? = null

    override fun onCreate() {
        super.onCreate()
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            startForegroundService()
        }
    }

    @RequiresApi(Build.VERSION_CODES.O)
    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        // Ensure that the service stays in the foreground
        startForegroundService()
        return START_STICKY
    }

    @RequiresApi(Build.VERSION_CODES.O)
    private fun startForegroundService() {
        // Create notification channel if needed (for Android Oreo and higher)
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val channel = NotificationChannel(
                CHANNEL_ID,
                "Overlay Service",
                NotificationManager.IMPORTANCE_DEFAULT
            )
            channel.description = "Foreground service for displaying overlay"
            channel.lightColor = Color.BLUE
            channel.lockscreenVisibility = Notification.VISIBILITY_PRIVATE
            val manager = getSystemService(NotificationManager::class.java)
            manager.createNotificationChannel(channel)
        }

        // Create notification for foreground service
        val notificationIntent = Intent(this, MainActivity::class.java)
        val pendingIntent = PendingIntent.getActivity(
            this, 0, notificationIntent,
            PendingIntent.FLAG_IMMUTABLE
        )
        val notification: Notification = Notification.Builder(this, CHANNEL_ID)
            .setContentTitle("Overlay Service")
            .setContentText("Overlay service is running")
            .setSmallIcon(R.drawable.logo_main)
            .setContentIntent(pendingIntent)
            .build()
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.TIRAMISU) {
            startForeground(NOTIFICATION_ID, notification)
        } else {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.UPSIDE_DOWN_CAKE) {
                startForeground(NOTIFICATION_ID, notification,
                    ServiceInfo.FOREGROUND_SERVICE_TYPE_REMOTE_MESSAGING)
            }
        }
    }


    // BackgroundService.kt
    private fun sendNotificationBroadcast() {
        val intent = Intent("com.oneclub.NOTIFICATION_RECEIVED")
        // Add any additional data if needed
        intent.putExtra("extra_key", "extra_value") // Example of adding extra data
        sendBroadcast(intent)
    }


    @RequiresApi(Build.VERSION_CODES.O)
    private fun handleNotification(notificationType: String) {
        if (notificationType == CHANNEL_ID) {
            if (overlayService == null) {
                startForegroundService()
                sendNotificationBroadcast() // Trigger broadcast when handling notification
            }
        }
    }
    override fun onDestroy() {
        super.onDestroy()
//        overlayService?.stopOverlay()
        stopForeground(true)
    }

    override fun onBind(intent: Intent): IBinder? {
        return null
    }

    companion object {
        private const val NOTIFICATION_ID = 1
        private const val CHANNEL_ID = "OverlayChannel"
    }
}
