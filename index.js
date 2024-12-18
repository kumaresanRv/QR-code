generateQr = () => {
  let qrBox = document.getElementById('qrBox');
  let qrText = document.getElementById('qrText');
  let errMsg = document.getElementById('errMsg');
  let qrImg=document.getElementById('qrImg');
  
  if (qrText.value.length > 0) {
    qrImg.classList.remove('qr-image');
    qrBox.classList.add('qr-box')
    errMsg.style.visibility = 'hidden';
    qrImg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+'https://'+qrText.value;

  }

  if (qrText.value.length == 0) {
    qrImg.classList.add('qr-image');
    qrBox.classList.remove('qr-box')
    qrText.classList.add('err-anime');
    errMsg.style.visibility = 'visible';
    setTimeout(() => {
      qrText.classList.remove('err-anime');
      errMsg.style.visibility = 'hidden';
    }, 700);
    
   
}
}