import { LoginManager, AccessToken, Profile } from "react-native-fbsdk-next";


export const loginFacebook = async () => {
    try {
        LoginManager.logInWithPermissions(["public_profile"])
            .then((result) => {
                if (result.isCancelled) {
                    console.log("Login cancelled");
                } else {
                    Profile.getCurrentProfile().then((data) => {
                        console.log(data);
                    });
                }
                AccessToken.getCurrentAccessToken().then((data) => {
                    console.log(data);
                });
            })
    } catch (error) {
        console.log("🚀 ~ file: LoginFacebook.ts:20 ~ loginFacebook ~ error:", error)
    }
};