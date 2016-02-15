import JSO from 'JSO';
import ZoomdataSDK from 'ZoomdataSDK';
import { localhost } from './zoomdata-connections/localhost';

const {credentials, application} = localhost;

let jso = new JSO({
    providerID: "zoomdata",
    client_id: "bmh0c2FfY2xpZW50MTQ1Mzk5MzY3OTM3MjJiODVjNTUyLWZmZjgtNGEzZi1hYjlmLWU0NzQ1NjUzNTQ1NA==",
    redirect_uri: "http://localhost:3000/index.html",
    authorization: "http://localhost:8080/zoomdata/oauth/authorize",
    scope: 'read'
});

jso.callback();
jso.getToken(function(token) {
    credentials.access_token = token.access_token;
});

function initClient() {
    return ZoomdataSDK.createClient({
        credentials: credentials,
        application: application
    });
}

export const createClient = initClient;