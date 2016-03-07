import { start as oauthStart, parseCredentials } from 'oauth2-implicit'
import { tapValue, clearLocationHash } from 'oauth2-implicit/build/utils';
import ZoomdataSDK from 'ZoomdataSDK';
import { localhost } from './zoomdata-connections/localhost';

const {credentials, application} = localhost;

const oauthOptions = {
    client_id: "bmh0c2FfY2xpZW50MTQ1Mzk5MzY3OTM3MjJiODVjNTUyLWZmZjgtNGEzZi1hYjlmLWU0NzQ1NjUzNTQ1NA==",
    redirect_uri: "http://localhost:3000/index.html",
    auth_uri: "http://localhost:8080/zoomdata/oauth/authorize",
    scope: ['read']
};

const oauthFinish = () => {
    // isOauthRedirect :: String -> Bool
    const isOauthRedirect = (hashString) => (
        hashString.indexOf('#access_token') !== -1
    );

    /* This function mutates location to remove
     the retrieved credentials */
    // extractCredentials :: String -> {} || null
    const extractCredentials = (hash) => (
        tapValue(
            parseCredentials(hash),
            clearLocationHash
        )
    );

    if (isOauthRedirect(location.hash)) {
        const oauthCredentials = extractCredentials(location.hash.slice(1));
        credentials.access_token = oauthCredentials.accessToken;
        return oauthCredentials;
    } else {
        return null;
    }
};

const oauthInit = (options) => {
    oauthFinish() || oauthStart(options);
};

oauthInit(oauthOptions);

function initClient() {
    return ZoomdataSDK.createClient({
        credentials: credentials,
        application: application
    });
}

export const createClient = initClient;
export const secure = application.secure;
export const host = application.host;
export const port = application.port;
export const path = application.path;
export const access_token = credentials.access_token;