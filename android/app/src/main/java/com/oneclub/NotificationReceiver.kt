package com.oneclub
// NotificationReceiver.kt
import android.app.NotificationChannel
import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.os.Build
import android.service.notification.StatusBarNotification
import android.util.Log

class NotificationReceiver : BroadcastReceiver() {

    override fun onReceive(context: Context, intent: Intent) {
        Log.d("parth","inside the receiver onReceive")
        if (intent.action == "android.service.notification.NotificationListenerService") {
            Log.d("parth","inside the receiver")
            // Handle notifications
            val notifications = intent.getParcelableArrayExtra("android.service.notification.extra.DISABLE_NOTIFICATION_ALERTS") as Array<StatusBarNotification>?
            notifications?.forEach { notification ->
                val packageName = notification.packageName
                val channelName = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
//                    val channel = notification.notification.channel
//                    channel?.name
                    val channel = "sound_channel"
                } else null
                val notificationTitle = notification.notification.extras?.getString("android.title")
                val notificationText = notification.notification.extras?.getString("android.text")
                val notificationId = notification.id

                if (notificationTitle != null) {
                    Log.d("parth",notificationTitle)
                }
                // You can handle different types of notifications based on their data
                // For example, check notificationTitle, notificationText, or packageName
                // You can also use channelName or notificationId for further processing
            }
        }
    }
}
