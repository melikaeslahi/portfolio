import * as Yup from 'yup';
export const contactValidtionsScheme = Yup.object().shape({
    fullname:Yup.string().required('نام و نام خاونوادگی الامی می باشد'),
    email:Yup.string().email('فرمت ایمیل صحیح نمی باشد.').required('ایمیل الزامی می باشد'),
    subject:Yup.string().required('موضوع ایمیل اجباری می باشذ'),
    message:Yup.string().required('پیام الزامی می باشذ.'),
    recaptcha:Yup.string().required('ریکپچا الزامی میباشد'),

});