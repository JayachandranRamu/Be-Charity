import axios from "axios";
import Cookies from "js-cookie";

const MainURL="http://localhost:8000"
const UserApi = MainURL+"/users";
const DonationApi=MainURL+"/donation";
const PaymentURL=MainURL+"/payment";
export const LoginRequest = (body) => {
  return axios.post(UserApi + "/login", body);
};

export const RegisterRequest = (body) => {
  return axios.post(UserApi + "/register", body);
};

export const LogoutRequest = () => {
  let token = Cookies.get("User-token");

  return axios.get(
    UserApi + "/logout",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const UserDataRequest = () => {
  let token = Cookies.get("User-token");
  return axios.get(
    UserApi + "/user-data",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

//All-data
export const DonationRequest = () => {
    return axios.get(
      DonationApi+"/"
    );
  };

  //Single-data
export const DonationSingleRequest = (id) => {
  return axios.get(
    DonationApi+"/"+id
  );
};

export const GetDataByUserId=(id)=>{
  return axios.get(UserApi+"/user-data-by-id/"+id);
};

//Payment Add
export const PaymentAddRequest = (body) => {
  return axios.post(PaymentURL + "/add", body);
};

//Catch Payment By Donation ID
export const CatchPaymentByDonationIdRequest = (id) => {
  return axios.get(PaymentURL+"/",{params:{donation_id:id}});
};

//Get Volunteers
export const GetVolunteersRequest = () => {
  return axios.get(UserApi+"/get-volunteers");
};

//Forget Password Link
export const ForgetPassword = (obj) => {
  Cookies.set("forget-password-email",obj.email,{ expires: 5 / (24 * 60) })
  return axios.post(UserApi+"/forget-password",obj);
};
