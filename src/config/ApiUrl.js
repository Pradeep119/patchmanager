export const headers = { 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') } 

export const Generate_Token_url = 'http://localhost:8080/token/generate-token'
export const Get_UserType_url = 'http://localhost:8080/users/me/'
export const producturl = 'http://localhost:8080/patch/allproducts'
export const patchurl = 'http://localhost:8080/patch/allpatches'
export const adduserurl = 'http://localhost:8080/users/signup'
export const pending_patch_url = 'http://localhost:8080/patch/pendingpatches'
export const pending_patchid_url = 'http://localhost:8080/patch/pendingpatchids'
export const user_signup_url = 'http://localhost:8080/users/signup'
export const pending_update_url = 'http://localhost:8080/patch/patches/update'
export const patch_save_url = 'http://localhost:8080/patch/save'
export const generate_patch_id_url = 'http://localhost:8080/patch/generate?productName='
export const get_product_list_url = 'http://localhost:8080/product/list'
