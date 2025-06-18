# Demo App Guide (V2.0.0.0)

## step1
<img src="images/index.png" width="600" height="500" />

- The 'Open DID Wallet' screen appears and guides the user through the registration process step by step.  
- Confirm that Step 1 is in progress and click the `NEXT` button.  
- Step 1 involves entering user information and setting a lock type for the wallet.  

## user_info
<img src="images/user_info.png" width="600" height="500" />

- The 'User Information' screen appears, and the user is prompted to enter their information.  
- Required fields are `First Name` and `Last Name`, which are used for:  
  - Generating PII with salt.  
  - Displaying user info on issued VCs in the app.  

## lock_popup
<img src="images/lock_popup.png" width="600" height="500"/>

- Wallet lock type setting screen. Not supported in this demo.  

## step2
<img src="images/step2.png" width="600" height="500"/>

- Confirm that Step 2 is in progress and click the `NEXT` button.  
- Step 2 involves generating a DID Document and registering an authentication method.  

## pin_registration
<img src="./images/pin_registration.png" width="600" height="500"/>

- Register a 6-digit PIN as an authentication method for signing.  
- After registration, a DID Document is created for the user.  

## finger_popup
<img src="./images/finger_popup.png" width="600" height="500"/>

- A popup prompts the user to choose whether to register a fingerprint for signing.  
- Only PIN registration is supported in this demo.  

## step3
<img src="images/step3.png" width="600" height="500"/>

- Confirm that Step 3 is in progress and click the `NEXT` button.  
- Step 3 involves signing and registering the DID Document.  

## pin_authentication
<img src="./images/pin_authentication.png" width="600" height="500"/>

- Enter the 6-digit PIN to sign and register the DID Document.  

## main
<img src="./images/main.png" width="600" height="500"/>

- Initially, no VC is issued, so the message `"No certificate has been issued."` is shown.  

<img src="./images/main2.png" width="600" height="500"/>

- Once VCs are issued, they are displayed in a list.
- This demo includes mDL with ZKP Credential, allowing confirmation of its inclusion.
- There are three possible VC statuses: ACTIVE, INACTIVE, and REVOKED, but this demo only displays the ACTIVE status.

- Two buttons are available at the bottom:
  - ADD VC: Issues VC through User Initiated method.  
  - SCAN QR: Scans a QR code for Issuer Initiated VC issuance or VP submission.  

- Two types of VCs are available:
  - National ID: User Initiated  
  - mDL (Mobile Driving License): Issuer Initiated  

## add_vc
<img src="./images/add_vc.png" width="600" height="500"/>

- To issue a VC, select `National ID Plan` from the list of available VCs.  

## scan_qr_vc
<img src="./images/scan_qr_vc.png" width="600" height="500"/>

- Scan the QR code for VC issuance.  
- This demo shows the scan screen without actual scanning.  

## issue_profile
<img src="./images/issue_profile.png" width="600" height="500"/>
<img src="./images/issue_profile2.png" width="600" height="500"/>

- Confirm information such as issuer, VC name, and issue date.  

## vc_info
<img src="./images/vc_info.png" width="600" height="500"/>

- Enter the following information to proceed with issuance:
  - Birthdate  
  - Address  
  - License Number  
  - Issue Date  

## vc_authentication
<img src="./images/vc_authentication.png" width="600" height="500"/>

- Enter the previously set PIN.  

## issue_result
<img src="./images/issue_result.png" width="600" height="500"/>

- VC issuance result is shown to the user.

## select_qr
<img src="./images/select_qr.png" width="600" height="500"/>

- Select a QR code for VP or ZKP Proof submission.  
- This demo substitutes actual scanning with a selection screen.  

## scan_qr_vp
<img src="./images/scan_qr_vp.png" width="600" height="500"/>

- Scan a QR code for VP submission.  
- This demo shows the scan screen without actual scanning.  

## verify_profile
<img src="./images/verify_profile.png" width="600" height="500"/>

- Confirm the claims to be submitted.  

## vp_authentication
<img src="./images/vp_authentication.png" width="600" height="500"/>

- Enter the previously set PIN.  

## verify_result
<img src="./images/verify_result.png" width="600" height="500"/>

- Confirmation message for completed submission.  

## scan_qr_proof
<img src="./images/scan_qr_proof.png" width="600" height="500"/>

- Scan a QR code for ZKP Proof submission.  
- This demo shows the scan screen without actual scanning.  

## proof_request_profile
<img src="./images/proof_request_profile.png" width="600" height="500"/>

- Confirm ZKP attribute information to be submitted.  

## zkp_submission_select
<img src="./images/zkp_submission_select.png" width="600" height="500"/>

- Confirm the ZKP attribute information.  
- Option to hide region, name, and citizenship.  
- Hidden info will not be disclosed upon submission.  

## detail_mdl
<img src="./images/detail_mdl.png" width="600" height="500"/>

- View detailed information of the issued mDL.  
- In this demo, ZKP Credential is included in the issued mDL.  

## detail_nid
<img src="./images/detail_nid.png" width="600" height="500"/>

- View detailed information of the issued National ID.  


## settings
<img src="./images/settings.png" width="600" height="500"/>

- Shows TAS and Verifier URLs. Arbitrary values are used in this demo.  
- After creating the user's DID Document, the DID can be checked here.  
