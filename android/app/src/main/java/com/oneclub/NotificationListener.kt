package com.oneclub
import android.content.Intent
import android.service.notification.NotificationListenerService
import android.service.notification.StatusBarNotification
import android.util.Log

class NotificationListener : NotificationListenerService() {
    override fun onNotificationPosted(sbn: StatusBarNotification) {
        super.onNotificationPosted(sbn)
        Log.d(TAG, "Notification received: ${sbn.packageName}")

        // Check if the notification is of interest and call handleNotification
        if (isNotificationOfInterest(sbn)) {
            handleNotification(sbn.packageName)
        }
    }

    private fun isNotificationOfInterest(sbn: StatusBarNotification): Boolean {
        // Add your logic here to determine if the notification is of interest
        // For example, check package name, notification content, etc.
        return true // Return true if the notification is of interest, false otherwise
    }

    private fun handleNotification(packageName: String) {
        // Call the handleNotification method in your BackgroundService
        val backgroundServiceIntent = Intent(this, BackgroundService::class.java)
        backgroundServiceIntent.putExtra("notification_package", packageName)
        startService(backgroundServiceIntent)
    }

    companion object {
        private const val TAG = "NotificationListener"
    }
}
