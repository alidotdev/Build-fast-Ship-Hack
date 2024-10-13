const firebaseAdmin = require('firebase-admin');
const jwt = require('jsonwebtoken');

// Initialize Firebase Admin SDK with a service account
firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT))
});

exports.googleAuth = async (req, res) => {
    const { token } = req.body;

    try {
        const decodedToken = await firebaseAdmin.auth().verifyIdToken(token);
        const { uid, email } = decodedToken;

        // Generate JWT Token for further communication
        const jwtToken = jwt.sign({ uid, email }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.json({ jwtToken });
    } catch (err) {
        res.status(401).json({ message: 'Invalid token', error: err.message });
    }
};