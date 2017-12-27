import { Injectable } from '@angular/core';

@Injectable()
export class MessageConstants {

   public ErrorCode= {
                    MSG_01: 'is required.',
                    MSG_02: 'is not a valid number.',
                    MSG_03: 'is not a valid email.',
                    MSG_04: 'is not a valid url.',
                    MSG_05: 'is not a valid pattern.',
                    MSG_06: 'does not meet the minimum strength.',
                    MSG_07: 'exceeds the maximum character strength.',
                    MSG_08: 'value is too low.',
                    MSG_09: 'value is very high.',
                    MSG_10: 'is not a valid range.',
                    MSG_11: 'is not added.',
                    MSG_12: 'Please enter all mandatory fileds.',
                    MSG_13: 'STD code should be a number.',
                    MSG_14: 'Landline number should be a number.',
                    MSG_15: 'Please enter a valid STD code.',
                    MSG_16: 'Please enter a valid landline number',
                    MSG_17: 'Please enter a valid email address',
                    MSG_18: 'Phone number should be a number',
                    MSG_19: 'Please enter a valid mobile number',
                    MSG_20: 'Please click plus icon to add the values.',
                    MSG_21: 'Please enter valid data.'
            }

    public CONFMSG= {
            MSG_01: 'Do you want to cancel without submit?',
            MSG_02: 'You have not added the value to the multiple list.',
            MSG_03: 'Registration request has been raised successfully.',
            MSG_04: 'Empanelment process has been initiated.',
            MSG_05: 'Please enter valid data.',
            MSG_06: 'Registration update request has been raised successfully.',
            MSG_07: 'Request has been sent back to the Maker.',
            MSG_08: 'Provider has been registered successfully. Provider code is : ',
            MSG_09: 'Do you want to proceed with empanelment for the provider?'            
    }

    public NOTIFYBTN= {
            MSG_01: 'Ok',
            MSG_02: 'No',
            MSG_03: 'Yes',
            MSG_04: 'Ok',
            MSG_05: 'Close'
    }
      
}
