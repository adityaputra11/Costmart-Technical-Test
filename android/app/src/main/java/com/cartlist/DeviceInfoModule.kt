package com.cartlist
import android.annotation.SuppressLint
import android.provider.Settings
import android.util.Log
import android.widget.Toast
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

private const val TAG = "DeviceInfoModule"
class DeviceInfoModule(reactContext: ReactApplicationContext):ReactContextBaseJavaModule(reactContext) {
    override fun getName()="DeviceInfoModule"

    @SuppressLint("HardwareIds")
    @ReactMethod fun getDeviceId(promise:Promise){
        val deviceId = Settings.Secure.getString(reactApplicationContext.contentResolver, Settings.Secure.ANDROID_ID)
        if (deviceId.isNotEmpty()){
           return promise.resolve(deviceId)
        }
        return promise.reject("Error Device Info","Cannot get deviceId")
    }
}