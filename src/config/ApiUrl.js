export const headers = { 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') } 

export const Generate_Token_url = 'https://34.67.203.166:8080/token/generate-token'
export const Get_UserType_url = 'https://34.67.203.166:8080/users/me/'
export const producturl = 'https://34.67.203.166:8080/patch/allproducts'
export const patchurl = 'https://34.67.203.166:8080/patch/allpatches'
export const adduserurl = 'https://34.67.203.166:8080/users/signup'
export const pending_patch_url = 'https://34.67.203.166:8080/patch/pendingpatches'
export const pending_patchid_url = 'https://34.67.203.166:8080/patch/pendingpatchids'
export const user_signup_url = 'https://34.67.203.166:8080/users/signup'
export const pending_update_url = 'https://34.67.203.166:8080/patch/patches/update'
export const patch_save_url = 'https://34.67.203.166:8080/patch/save'
export const generate_patch_id_url = 'https://34.67.203.166:8080/patch/generate?productName='
export const get_product_list_url = 'https://34.67.203.166:8080/product/list'
