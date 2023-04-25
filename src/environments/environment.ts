// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


const url1:string="https://letoshopping.cloudns.ph/wp-json/wc/v3"
const authurl1:string="https://letoshopping.cloudns.ph/wp-json/jwt-auth/v1/token"
const tokenverifyurl1:string="https://letoshopping.cloudns.ph/wp-json/jwt-auth/v1/token/validate"

export const environment = {
  production: false,
  backend_api_url : url1,
  auth_url:authurl1,
  token_verify_url:tokenverifyurl1,
  readonlykeys:{
    consumer_key:'ck_0b5f8dbf7554bad96af922d699330d0f9e67f4b8',
    consumer_secret:'cs_e78fbf3dd2814b2cf0f8a9638954ce87cb06b79e'
  },
  writekeys:{
    consumer_key:'ck_88ea807bbe2c1b79f8e81fd6c2a8246afa6a4c67',
    consumer_secret:'cs_b4d5ba0d1bde5715a87f40edab52cceb491262cf'
  },

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
