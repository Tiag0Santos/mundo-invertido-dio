  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDbh1al2JfCiALMDN3-s9fThR7OFE-pnh8",
    authDomain: "mundo-invertido-e704b.firebaseapp.com",
    projectId: "mundo-invertido-e704b",
    storageBucket: "mundo-invertido-e704b.appspot.com",
    messagingSenderId: "27484611474",
    appId: "1:27484611474:web:9a023b2703e44b9d3e974b"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  export default app