package com.oneclub

import android.content.Intent
import android.content.IntentFilter
import android.os.Build
import android.os.Bundle
import androidx.annotation.RequiresApi
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate


class MainActivity : ReactActivity() {
private val notificationReceiver=NotificationReceiver();

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "OneClub"

    @RequiresApi(Build.VERSION_CODES.TIRAMISU)
    override fun onCreate(savedInstanceState: Bundle?) {

        super.onCreate(savedInstanceState);
//        interceptCall = InterceptCall()
//        val intentFilter = IntentFilter("android.intent.action.PHONE_STATE")
//        registerReceiver(interceptCall, intentFilter)

        val intentFilter=IntentFilter().apply {
            addAction("android.service.notification.NotificationListenerService")
        }
        registerReceiver(notificationReceiver,intentFilter, RECEIVER_NOT_EXPORTED)

        // Start the background service
        val serviceIntent = Intent(this, BackgroundService::class.java)
        startService(serviceIntent)

    }

    override fun onDestroy() {
        super.onDestroy()
        unregisterReceiver(notificationReceiver)
    }
  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
}
