const {
  API_CHANNEL_NAME: apiChannelName,
  API_CHANNEL_THUMBNAIL: apiChannelThumbnail,
  APP_VERSION: appVersion,
  AZURE_APP_ID: azureAppId,
  CHATWOOT_INBOX_TOKEN: chatwootInboxToken,
  CSML_EDITOR_HOST: csmlEditorHost,
  CREATE_NEW_ACCOUNT_FROM_DASHBOARD: createNewAccountFromDashboard,
  DIRECT_UPLOADS_ENABLED: directUploadsEnabled,
  DISPLAY_MANIFEST: displayManifest,
  GIT_SHA: gitSha,
  HCAPTCHA_SITE_KEY: hCaptchaSiteKey,
  INSTALLATION_NAME: installationName,
  LOGO_THUMBNAIL: logoThumbnail,
  LOGO: logo,
  LOGO_DARK: logoDark,
  DISABLE_USER_PROFILE_UPDATE: disableUserProfileUpdate,
  DEPLOYMENT_ENV: deploymentEnv,
} = window.globalConfig || {};

const brandName = 'GLXMart';
const brandURL = 'https://www.glxmart.com';
const widgetBrandURL = 'https://www.glxmart.com';
const privacyURL = 'https://www.glxmart.com/support-chat/privacy';
const termsURL = 'https://www.glxmart.com/support-chat/terms';

const state = {
  apiChannelName,
  apiChannelThumbnail,
  appVersion,
  azureAppId,
  brandName,
  chatwootInboxToken,
  csmlEditorHost,
  deploymentEnv,
  createNewAccountFromDashboard,
  directUploadsEnabled: directUploadsEnabled === 'true',
  disableUserProfileUpdate: disableUserProfileUpdate === 'true',
  displayManifest,
  gitSha,
  hCaptchaSiteKey,
  installationName,
  logo,
  logoDark,
  logoThumbnail,
  privacyURL,
  termsURL,
  widgetBrandURL,
};

export const getters = {
  get: $state => $state,
  isOnChatwootCloud: $state => $state.deploymentEnv === 'cloud',
  isACustomBrandedInstance: $state => $state.installationName !== 'Chatwoot',
  isAChatwootInstance: $state => $state.installationName === 'Chatwoot',
};

export const actions = {};

export const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
