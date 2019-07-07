
const admin = require('firebase-admin');
var serviceAccount = {
    "type": "service_account",
    "project_id": "tinderpet-e6626",
    "private_key_id": "0e99fd9499e589e52fa7a33684cf5b3d8197f861",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCO24cS8YyfJ8Bh\nrpvOEpV5cK5xA7AYgXy6HxqvbsaM0Sa3mEO3jROspxb48Z2CQpobut7J0GViZLCt\n1iu7XTrwIxGIGSvKdf3AXTVjUdMKLBTI+VIzTA7JLDX/FFMPAxYbjmW+3bDLiZBh\nVhshNooAntWhJhXB5rYegh4zuX+wpmfIP0S+fb61MSA+jj6yL+Yq0DYHTpLqItn2\nIyRgQLsxscbLb6CklMcY0MJ+Z07johYF/lDnIty/hi86P9KonOrTOj8wi1LO9mGa\nEWp/i/Ufgf5WIplMNgrywha8cd++3MUOGefW27xIAo1LGt0v0mfmyrxI2FwnnQsL\naigovFH1AgMBAAECggEAB/j9cVO0tt8nj+wIOvhzihr9SUZc6gkz9kktGpRSlWJI\nyF9BjDld2zlaAVuuoCnqYtjLfTTZq6OV7qWwvByoYOV8IX3SIVLzbexlwdy7q+oo\n4Mx1R3KbsqN6gflW51QTREduqzfBGaLcQWpmSjS6f+1dW8h911vyVwKI//b+xtN1\nQkKxbqGmkpBSQ2LPPvvZ1AYKVYtThQfi/k8+mUqcC8nnUEPLpoS6AwcxEdM4hAYT\narBVb7xGDYIpX5JUNtoqF/1/tkF8ecmSkTB2YU2yBHBkpTBMNYqI+jab/IB2+LQQ\nWkSgGN6t7wE8h7Gsj87tG53rJc5DK4sDrn138ImeQwKBgQDIFOMm3KiK5e/MxEr6\najDsS29D1rk/w/DTpGvzivh6t0dh3VoZioDZ6TnrqnriN+BxgUa3ICBTDGY+EDMB\n5MzQZB5Tos5u9sMQ+fNtm+KL4kCoC+V2M8i3Z09vmURrER8jsIX/Br5Yu3tR4s5H\nE/C7ctkE2GbMdQeNzv79d83U/wKBgQC2yHdUoQxgsfhwuGBo3fwMrK2HTeYyitol\nhb0lhtceieM69RNmHPTHBZQ+GgBZRAUnvLG2ZlWraqq2NrRk5IsPDJ9IfJxTtZ7V\nqgTj8//4XasXQWOAIKtN0qjrKbmwXv73DIb4Wg1N34c6yEfPFacqTC+tTzz2kPB2\n77ITI1TVCwKBgCde9NPQ19l9JZLFjXt5KedVcK+IsSs7A0iiMhvaXMrJBeLcC766\n4l/+5Mba5RNeq2uqZJ/kUngFGJld1quouiTHjrAmeTiclgXhKWWIJywfeVmX/a8k\nwXpVeewb3Lq0w8viEHv+d7Y+LiYO20hhRB2em9W4P4I8BSCCeuqliHtBAoGAZ4ts\nvk51epmXShPI2d9XF78ClrG0hFFQfw0iN44Jc01dolqPYLtqlww8DGoiZG86FGa6\nrb+PLIpCpvKagsVNWXsnCKM+09UBY7zrBE+HZCV79LKgMUdQg8eg1YdPn/BQs5cv\nJqWs/75vFwe6Vj/H8RgzshQ/TtaQwm/LCzhqqD0CgYBxdl3t3YVo/iFrCxLqCROr\nrXqE2CCNhxUOBluTSX6bFvO9Uen+DmUKbB5DBwhOSsPxF5LOTjQR1AKHmAdM3IKX\nNXuzJRxH8TZ2TtTCJusPEG9lBFemQAkdGFkx66zHMceDvbe89B6TTQ9ZIkTu4IBN\nRiUbZ4m5a9lZlXLuPcRg0Q==\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-0pbg4@tinderpet-e6626.iam.gserviceaccount.com",
    "client_id": "112546489235241040890",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-0pbg4%40tinderpet-e6626.iam.gserviceaccount.com"
  }
  

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

var db = admin.firestore();

var data = {
    nombre: 'Damian',
    apellido: 'Morales',
    email: 'damian@hotmail.com',
    password: '',
    usuario: 'user',
    foto_URL: 'some_url',
    telefono: '3748234565',
    fecha_de_nacimiento: new Date()

  };
  
  // Add a new document in collection "cities" with ID 'LA'
  var setDoc = db.collection('usuarios').add(data).then(ref => {
    console.log('Added document with ID: ', ref.id);
  });;