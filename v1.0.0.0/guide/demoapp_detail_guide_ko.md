# Demo App 가이드 (V1.0.0.0)
## step1
<img src="images/index.png" width="600" height="500" />

- 'Open DID Wallet' 화면이 나타나며, 사용자의 등록 과정을 단계별로 안내해 줍니다.  
- 현재 Step 1을 진행 중임을 확인하고, `NEXT` 버튼을 클릭합니다.
- Step 1은 사용자의 정보입력 후 월렛의 잠금타입을 설정하는 절차입니다.

## user_info
<img src="images/user_info.png" width="600" height="500" />

- 'User Information' 화면이 나타나며 사용자의 정보를 입력하게 됩니다.  
- 입력 항목은 `First Name`과 `Last Name`이며, 아래와 같은 용도로 사용됩니다:  
  - 사용자의 PII를 생성할 때 salt로 사용됩니다.  
  - 앱에서 발급받은 VC를 화면에 표시할 때, 사용자의 정보로 출력됩니다.

## lock_popup
<img src="images/lock_popup.png" width="600" height="500"/>

- 월렛의 잠금 타입 설정 화면 입니다, 본 데모에서는 지원하지 않습니다.


## step2
<img src="images/step2.png" width="600" height="500"/>

- 현재 Step 2가 진행 중임을 확인하고, `NEXT` 버튼을 클릭합니다.
- Step 2는 DID Document 생성 및 인증 수단 등록하는 절차입니다.


## pin_registration
<img src="./images/pin_registration.png" width="600" height="500"/>

- 서명을 위한 인증 수단으로 사용자의 PIN 등록을 진행합니다.
- PIN 6자리를 등록 후 사용자의 DID Document를 생성합니다.

## finger_popup
<img src="./images/finger_popup.png" width="600" height="500"/>

- 서명을 위한 인증 수단으로 사용자의 지문 등록을 진행할지 선택하는 팝업입니다. 본 데모에서는 PIN 등록만 지원합니다.


## step3
<img src="images/step3.png" width="600" height="500"/>

- 현재 Step 3가 진행 중임을 확인하고, `NEXT` 버튼을 클릭합니다.
- Step 3는 DID Document에 사용자의 서명 후 등록하는 절차입니다.


## pin_authentication
<img src="./images/pin_authentication.png" width="600" height="500"/>

- DID Document 서명을 위하여 사용자의 PIN 입력을 진행합니다.
- PIN 6자리를 입력 후 사용자의 DID Document를 등록합니다.

## main
<img src="./images/main.png" width="600" height="500"/>

- 최초 사용자 등록 후에는 발급받은 VC가 없기 때문에 `"No certificate has been issued."` 라는 문구가 표시됩니다.

<img src="./images/main2.png" width="600" height="500"/>

- VC가 발급된 경우에는 VC 목록이 화면에 표시됩니다.

- 하단에는 다음 두 개의 버튼이 존재합니다:
  - ADD VC: 사용자 주도(User Initiated) 방식으로 VC를 발급합니다.
  - SCAN QR: 발급기관 주도(Issuer Initiated) 방식으로  VC 발급 또는 VP 제출을 위한 QR 코드를 스캔합니다.

- 본 데모에서는 두가지의 VC를 발급받을 수 있습니다.
  - National ID: User Initiated 방식
  - mDL (Mobile Driving License): Issuer Initiated 방식


## add_vc
<img src="./images/add_vc.png" width="600" height="500"/>

- VC를 발급받기 위하여 발급 가능한 VC 목록에서 `National ID Plan`을 선택합니다.


## scan_qr_vc
<img src="./images/scan_qr_vc.png" width="600" height="500"/>

- VC 발급을 위하여 발급용 QR 코드를 스캔합니다.
- 본데모에서는 실제 스캔을 하지 않고 스캔하는 화면을 보여줍니다.


## issue_profile
<img src="./images/issue_profile.png" width="600" height="500"/>

<img src="./images/issue_profile2.png" width="600" height="500"/>

- 발급기관, VC 이름, 발급일 등의 정보를 사용자에게 확인합니다.


## vc_info
<img src="./images/vc_info.png" width="600" height="500"/>

- 사용자가 다음의 발급 정보를 입력하면 해당 정보를 통해 발급을 진행합니다.
   - Birthdate
   - Address
   - License Number
   - Issue Date


## vc_authentication
<img src="./images/vc_authentication.png" width="600" height="500"/>

- 사용자 등록 시 설정한 PIN을 입력합니다.


## issue_result
<img src="./images/issue_result.png" width="600" height="500"/>

- VC 발급 완료룰 사용자에게 확인합니다.


## scan_qr_vp
<img src="./images/scan_qr_vp.png" width="600" height="500"/>

- VP 제출을 위하여 제출용 QR 코드를 스캔합니다.
- 본데모에서는 실제 스캔을 하지 않고 스캔하는 화면을 보여줍니다.


## verify_profile
<img src="./images/verify_profile.png" width="600" height="500"/>

- 제출할 클레임의 정보를 사용자에게 확인합니다.


## vp_authentication
<img src="./images/vp_authentication.png" width="600" height="500"/>

- 사용자 등록 시 설정한 PIN을 입력합니다.


## verify_result
<img src="./images/verify_result.png" width="600" height="500"/>

- VP 제출 완료룰 사용자에게 확인합니다.


## detail_mdl
<img src="./images/detail_mdl.png" width="600" height="500"/>

- 발급받은 mDL의 상세정보를 확인 할 수 있습니다.


## detail_nid
<img src="./images/detail_nid.png" width="600" height="500"/>

- 발급받은 National ID의 상세정보를 확인 할 수 있습니다.



## issue_result
<img src="./images/issue_result.png" width="600" height="500"/>

- VC 발급 완료룰 사용자에게 확인합니다.



## settings
<img src="./images/settings.png" width="600" height="500"/>

- TAS와 Verifier의 URL을 표시합니다.본 데모에서는 임의의 값을 표시합니다.
- 사용자의 DID Documnet 생성 후 DID를 확인 할 수 있습니다.