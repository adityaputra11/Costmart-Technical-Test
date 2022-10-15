//
//  RCTDeviceInfoModule.m
//  CartList
//
//  Created by FLP-9-AdityaPratama on 15/10/22.
//

// RCTCalendarModule.m
#import "RCTDeviceInfoModule.h"
#import <React/RCTLog.h>


@implementation RCTDeviceInfoModule

// To export a module named RCTCalendarModule
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getDeviceId:(RCTPromiseResolveBlock)resolve
                      rejecter:(RCTPromiseRejectBlock)reject)
{
  NSString *uniqueIdentifier = [[[UIDevice currentDevice] identifierForVendor] UUIDString];
  if(uniqueIdentifier){
    resolve(uniqueIdentifier);
  }else{
    reject(@"error",@"cannot get device id",nil);
  }
}
@end
