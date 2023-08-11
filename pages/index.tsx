'use client'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from "react";
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import { Tabs, Tab, Typography } from '@mui/material';
import styled from '@emotion/styled';
import 'react-toastify/dist/ReactToastify.css';
// import { useMutation } from 'react-query';
// import { useRouter } from 'next/navigation';

import { devices } from '../utils/responsive';
import googleLogo from '../public/images/google.svg';
import { useRouter } from 'next/router';

// import styles from '../styles/Home.module.css'
import { useSession, signIn, signOut } from "next-auth/react"


// import { LoginDetails, SignUpDetails, authApi } from '../api/auth';
// import { processError } from '../utils/processError';


// import payhelpaLogo from '../../assets/images/png/payhelpa-logo.png';
// import googleLogo from '/images/google.svg';
// import facebookLogo from '../../assets/images/svg/Facebook_f_logo_(2019) 1.svg';
// import appleLogo from '../../assets/images/AppleLogo.svg';

const { xs, sm, md, lg } = devices;

const Login = () => {
  const { data: session } = useSession()
  console.log('Session Data:', session);

  //   const [loading, setLoading] = useState(false);
//   const [loginDetails, setLoginDetails] = useState<LoginDetails>({
//     email: '',
//     password: '',
//   });

//   const [authDetails, setAuthDetails] = useState<SignUpDetails>({
//     email: '',
//     password: '',
//     phoneNumber: '',
//   });

  const [tabValue, setTabValue] = useState(0);
  const router = useRouter();

  //   const authAction = tabValue == 1 ? authApi.createHelpaAccount : authApi.login;

  //   const { mutate } = useMutation(authAction, {
  //     onMutate: () => setLoading(true),
  //     onSuccess: (data) => {
  //       setLoading(false);

  //       if (data?.success) {
  //         toast(`${tabValue == 0 ? 'Logged in' : 'Sign up'} Successfully!`);
  //         localStorage.setItem('token', data?.token);
  //         localStorage.setItem('user', JSON.stringify(data?.user?.details));
  //         setTimeout(() => {
  //           router.push(tabValue == 1 ? '/auth/success' : '/chatroom');
  //         }, 1000);
  //       } else {
  //         toast('invalid credentials');
  //       }
  //     },
  //     onError: (error) => {
  //       console.log(processError(error));
  //       setLoading(false);
  //       throw error;
  //     },
  //   });

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleLoginAndRedirect = async () => {
    const result = await signIn('google');
  };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   if (tabValue == 1)
  //     return setAuthDetails((prev) => ({ ...prev, [name]: value }));
  //   setLoginDetails((prev) => ({ ...prev, [name]: value }));
  // };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // e.preventDefault();
    // if (tabValue == 1) return mutate(authDetails);
    // mutate(loginDetails);
  // };

  const handleGoogleLogIn = () => {
    window.location.href =
      'http://localhost:3000/api/auth/callback/google';
  };
  

  return (
    <div >
      <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="shortcut icon" href="images/favicon.ico" />
                <title>Padd AI | ConnectMe | Chat Application HTML Template</title>
                <link rel="stylesheet" href="/bundle1c4a.module.css" />
                <link rel="stylesheet" href="/app1c4a.module.css" />
            </Head>

                <main className="tyn-body">          
          <div className="tyn-root">
    <div className="tyn-content tyn-content-page">
      <div className="tyn-main">
        <div className="tyn-section">
          <div className="container">
            <div className="tyn-text-block text-center pb-4 pb-lg-5">
              <a className="tyn-logo" href="index-2.html">
                <svg
                  viewBox="0 0 43 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M37.2654 14.793C37.2654 14.793 45.0771 20.3653 41.9525 29.5311C41.9525 29.5311 41.3796 31.1976 39.0361 34.4264L42.4732 37.9677C42.4732 37.9677 43.3065 39.478 41.5879 39.9987H24.9229C24.9229 39.9987 19.611 40.155 14.8198 36.9782C14.8198 36.9782 12.1638 35.2076 9.76825 31.9787L18.6215 32.0308C18.6215 32.0308 24.298 31.9787 29.7662 28.3333C35.2344 24.6878 37.4217 18.6988 37.2654 14.793Z"
                    fill="#60A5FA"
                  />
                  <path
                    d="M34.5053 12.814C32.2659 1.04441 19.3506 0.0549276 19.3506 0.0549276C8.31004 -0.674164 3.31055 6.09597 3.31055 6.09597C-4.24076 15.2617 3.6751 23.6983 3.6751 23.6983C3.6751 23.6983 2.99808 24.6357 0.862884 26.5105C-1.27231 28.3854 1.22743 29.3748 1.22743 29.3748H17.3404C23.4543 28.7499 25.9124 27.3959 25.9124 27.3959C36.328 22.0318 34.5053 12.814 34.5053 12.814ZM19.9963 18.7301H9.16412C8.41419 18.7301 7.81009 18.126 7.81009 17.3761C7.81009 16.6261 8.41419 16.022 9.16412 16.022H19.9963C20.7463 16.022 21.3504 16.6261 21.3504 17.3761C21.3504 18.126 20.7358 18.7301 19.9963 18.7301ZM25.3708 13.314H9.12245C8.37253 13.314 7.76843 12.7099 7.76843 11.96C7.76843 11.21 8.37253 10.6059 9.12245 10.6059H25.3708C26.1207 10.6059 26.7248 11.21 26.7248 11.96C26.7248 12.7099 26.1103 13.314 25.3708 13.314Z"
                    fill="#2563EB"
                  />
                </svg>
              </a>
              <h1 className="mt-3">Welcome Back to Padd AI</h1>
              <p>Your AI-powered knowledge Bot.</p>
            </div>
            <div className="row g-2 justify-content-center text-center">
              <div className="col-xl-7 col-lg-6">
                {/* <h4 className="title mb-3">Try it</h4> */}
                <div className="row g-3 justify-content-center">
                  <div className="col-sm-6 col-md-5 col-lg-12">
                    <div className="card h-100 border-0">
                      <div className="card-body">
                        <div className="tyn-text-block">
                        <Container>
                            <ToastContainer limit={2} />
                            <Link href='/'>
                                {/* <Image src={payhelpaLogo} alt='Payhelpa Image' /> */}
                            </Link>
                            <AuthContainer>
                                <div>
                                    
                               {/* signin */}
                               
                                {!session ? (
                                <div>
                                     <TabDiv>
                                    <Tabs
                                    // value={tabValue}
                                    aria-label='signin/ signup tab'
                                    // onChange={handleTabChange}
                                    >
                                    <Tab
                                        label={
                                        <Typography
                                            fontSize={'24px'}
                                            fontWeight={'500'}
                                            textTransform={'capitalize'}
                                        >
                                            Sign In
                                        </Typography>
                                        }
                                    />
                                    {/* <Tab
                                        label={
                                        <Typography
                                            fontSize={'24px'}
                                            fontWeight={'500'}
                                            textTransform={'capitalize'}
                                        >
                                            Sign Up
                                        </Typography>
                                        }
                                    /> */}
                                    </Tabs>
                                </TabDiv>
                                    
                                    <SocialLogin                                    
                                        onClick={handleLoginAndRedirect}
                                        >
                                        <Image 
                                        src={googleLogo} alt='google logo' 
                                        />{' '}
                                        <Typography fontSize={'17px'}>Continue with Google</Typography>
                                    </SocialLogin>
                                   
                                    <Form 
                                    >
                                    <div>
                                        <Typography marginBottom={'.5rem'}>
                                        Enter your email address
                                        </Typography>
                                        <Input
                                        placeholder='email address'
                                        name='email'
                                        type='email'
                                        // onChange={handleChange}
                                        />
                                    </div>
                                   
                                    <div>
                                        <Typography marginBottom={'.5rem'}>
                                        Enter your password
                                        </Typography>
                                        <Input
                                        placeholder='Password'
                                        name='password'
                                        type='password'
                                        // onChange={handleChange}
                                        />
                                        <Typography margin={'.5rem'} color={'#4577BC'}>
                                        Forgot password?
                                        </Typography>
                                    </div>
                                    <Button 
                                    >
                                        <Typography color={'#fff'}>
                                        Sign In
                                        </Typography>
                                    </Button>
                                    </Form>
                                    
                                </div>
                                 ) : (
                                    <>
                                    <h3>Welcome, {session.user.name}!</h3>
                                    <div className="mt-4">
                                    <Link href="/home"
                
                  className="btn btn-primary btn-rg btn-pill"
                >
                  {/* send-fill */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-send-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                  </svg>
                  <span>Start Talking</span>
                  </Link>
              </div>
                                    {/* <button onClick={() => signOut()}>Sign out</button> */}
                                    </>
                            )}
                                </div>
                            </AuthContainer>
                        </Container>
                        </div>
                      </div>
                    </div>
                  </div>                  
                </div>
                {/* .row */}
              </div>
              
            </div>
            {/* .row */}
            <div className="text-center mt-4">
              {/* <p>Choose a conversation style</p>
              <div className="row justify-content-center">
                <div className="col-xl-5">
                  <ul className="d-inline-flex flex-wrap bg-white p-2 rounded-3 justify-content-center gap gap-2">
                    <li className="flex-grow-1">
                      <input
                        type="radio"
                        className="btn-check"
                        name="convotype"
                        id="creative"
                        autoComplete="off"
                        defaultChecked={true}
                      />
                      <label
                        className="btn btn-light flex-column w-100"
                        htmlFor="creative"
                      >
                        <span className="w-100 small mb-n3 pb-1">More</span>
                        Creative
                      </label>
                    </li>
                    <li className="flex-grow-1">
                      <input
                        type="radio"
                        className="btn-check"
                        name="convotype"
                        id="balanced"
                        autoComplete="off"
                      />
                      <label
                        className="btn btn-light flex-column w-100"
                        htmlFor="balanced"
                      >
                        <span className="w-100 small mb-n3 pb-1">More</span>
                        Balanced
                      </label>
                    </li>
                    <li className="flex-grow-1">
                      <input
                        type="radio"
                        className="btn-check"
                        name="convotype"
                        id="precise"
                        autoComplete="off"
                      />
                      <label
                        className="btn btn-light flex-column w-100"
                        htmlFor="precise"
                      >
                        <span className="w-100 small mb-n3 pb-1">More</span>
                        Precise
                      </label>
                    </li>
                  </ul>
                </div>
              </div> */}
              {/* <div className="mt-4"> */}
                {/* <a
                  className="btn btn-primary btn-rg btn-pill"
                  href="chat-bot-s2.html"
                > */}
                  {/* send-fill */}
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-send-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                  </svg> */}
                  {/* <span>Start Talking</span> */}
                {/* </a> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* .tyn-main */}
    </div>
    <div className="tyn-footer border-top">
      <div className="bg-white text-center py-3">
        <p className="mb-0 small">
          2023 © Converse App
          <a
            href="https://themeforest.net/user/themeyn"
            target="_blank"
            className="fw-semibold"
          >
            Themeyn
          </a>{" "}
        </p>
      </div>
    </div>
    <div className="tyn-quick-chat" id="tynQuickChat">
      <button className="tyn-quick-chat-toggle js-toggle-quick">
        <svg viewBox="0 0 43 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M37.2654 14.793C37.2654 14.793 45.0771 20.3653 41.9525 29.5311C41.9525 29.5311 41.3796 31.1976 39.0361 34.4264L42.4732 37.9677C42.4732 37.9677 43.3065 39.478 41.5879 39.9987H24.9229C24.9229 39.9987 19.611 40.155 14.8198 36.9782C14.8198 36.9782 12.1638 35.2076 9.76825 31.9787L18.6215 32.0308C18.6215 32.0308 24.298 31.9787 29.7662 28.3333C35.2344 24.6878 37.4217 18.6988 37.2654 14.793Z"
            fill="#60A5FA"
          />
          <path
            d="M34.5053 12.814C32.2659 1.04441 19.3506 0.0549276 19.3506 0.0549276C8.31004 -0.674164 3.31055 6.09597 3.31055 6.09597C-4.24076 15.2617 3.6751 23.6983 3.6751 23.6983C3.6751 23.6983 2.99808 24.6357 0.862884 26.5105C-1.27231 28.3854 1.22743 29.3748 1.22743 29.3748H17.3404C23.4543 28.7499 25.9124 27.3959 25.9124 27.3959C36.328 22.0318 34.5053 12.814 34.5053 12.814ZM19.9963 18.7301H9.16412C8.41419 18.7301 7.81009 18.126 7.81009 17.3761C7.81009 16.6261 8.41419 16.022 9.16412 16.022H19.9963C20.7463 16.022 21.3504 16.6261 21.3504 17.3761C21.3504 18.126 20.7358 18.7301 19.9963 18.7301ZM25.3708 13.314H9.12245C8.37253 13.314 7.76843 12.7099 7.76843 11.96C7.76843 11.21 8.37253 10.6059 9.12245 10.6059H25.3708C26.1207 10.6059 26.7248 11.21 26.7248 11.96C26.7248 12.7099 26.1103 13.314 25.3708 13.314Z"
            fill="#2563EB"
          />
        </svg>
        <span className="badge bg-primary top-0 end-0 position-absolute rounded-pill">
          2
        </span>
      </button>
      <div className="tyn-quick-chat-box">
        <div className="tyn-quick-chat-head">
          <div className="tyn-media-group">
            <div className="tyn-media tyn-size-rg">
              <img src="images/avatar/1.jpg" alt="" />
            </div>
            <div className="tyn-media-col">
              <div className="tyn-media-row">
                <h6 className="name">Jasmine Thompson</h6>
              </div>
              <div className="tyn-media-row has-dot-sap">
                <span className="meta">Active</span>
              </div>
            </div>
          </div>
        </div>
        <div className="tyn-quick-chat-reply js-scroll-to-end">
          <div className="tyn-reply tyn-reply-quick" id="tynQuickReply">
            <div className="tyn-reply-item outgoing">
              <div className="tyn-reply-group">
                <div className="tyn-reply-bubble">
                  <div className="tyn-reply-text">
                    {" "}
                    Do you know which App or feature it will require to set up.{" "}
                  </div>
                  {/* tyn-reply-text */}
                </div>
                {/* .tyn-reply-bubble */}
                <div className="tyn-reply-bubble">
                  <div className="tyn-reply-text"> These article helps. </div>
                  {/* tyn-reply-text */}
                </div>
                {/* .tyn-reply-bubble */}
              </div>
              {/* .tyn-reply-group */}
            </div>
            {/* .tyn-reply-item */}
            <div className="tyn-reply-item incoming">
              <div className="tyn-reply-avatar">
                <div className="tyn-media tyn-size-md tyn-circle">
                  <img src="images/avatar/2.jpg" alt="" />
                </div>
              </div>
              <div className="tyn-reply-group">
                <div className="tyn-reply-bubble">
                  <div className="tyn-reply-link">
                    <a
                      className="tyn-reply-anchor"
                      href="https://www.envato.com/atomic-power-plant-engine/"
                    >
                      https://www.envato.com/atomic-power-plant-engine/
                    </a>
                  </div>
                </div>
                {/* .tyn-reply-bubble */}
                <div className="tyn-reply-bubble">
                  <div className="tyn-reply-text">
                    {" "}
                    I hope these article helps.{" "}
                  </div>
                </div>
                {/* .tyn-reply-bubble */}
              </div>
              {/* .tyn-reply-group */}
            </div>
            {/* .tyn-reply-item */}
            <div className="tyn-reply-separator">May 10, 2022, 11:14 AM</div>
            <div className="tyn-reply-item outgoing">
              <div className="tyn-reply-group">
                <div className="tyn-reply-bubble">
                  <div className="tyn-reply-text">
                    {" "}
                    Yes, you can reset your password online. Go to the login
                    page, click on "Forgot Password," and follow the
                    instructions to reset it.{" "}
                  </div>
                  {/* tyn-reply-text */}
                </div>
                {/* .tyn-reply-bubble */}
              </div>
              {/* .tyn-reply-group */}
            </div>
            {/* .tyn-reply-item */}
            <div className="tyn-reply-item incoming">
              <div className="tyn-reply-avatar">
                <div className="tyn-media tyn-size-md tyn-circle">
                  <img src="images/avatar/2.jpg" alt="" />
                </div>
              </div>
              <div className="tyn-reply-group">
                <div className="tyn-reply-bubble">
                  <div className="tyn-reply-text">
                    {" "}
                    How do I reset my password? Can I do it online?{" "}
                  </div>
                </div>
                {/* .tyn-reply-bubble */}
              </div>
              {/* .tyn-reply-group */}
            </div>
            {/* .tyn-reply-item */}
          </div>
          {/* .tyn-reply */}
        </div>
        <div className="tyn-quick-chat-form">
          <div
            className="tyn-chat-form-input bg-light"
            id="tynQuickChatInput"
            contentEditable={true}
          />
          <ul className="tyn-list-inline me-n2 my-1">
            <li>
              <button className="btn btn-icon btn-white btn-sm btn-pill">
                {/* send-fill */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-send-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                </svg>
              </button>
            </li>
          </ul>
        </div>
        <button className="btn btn-danger btn-sm btn-icon top-0 end-0 position-absolute rounded-pill translate-middle js-toggle-quick">
          {/* x-lg */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
            <script src="/assets/js/bundle1c4a.js"></script>
            <script src="/assets/js/app1c4a.js"></script>

          </main>
    </div>
  )
}
export default Login
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding-top: 1rem;
  @media ${xs} {
    display: block;
    padding: 1rem;
    width: 100%;
    box-sizing: border-box;
  }
  @media ${sm} {
    display: flex;
  }
  @media ${lg} {
    display: flex;
  }
`;

const AuthContainer = styled.div`
  min-height: 500px;
  width: 573px;
  border-radius: 16px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  @media ${xs} {
    width: 90%;
    padding: 2rem 1rem;
    margin-top: 3rem;
  }
  @media ${sm} {
    width: 60%;
    padding: 1rem 0rem;
  }

  @media ${lg} {
    display: flex;
    width: 573px;
    padding: 2rem 0;
    margin-top: -30px;
  }
`;

const TabDiv = styled.div`
  margin-bottom: 2.5rem;
`;

const SocialLogin = styled.div`
  width: 360px;
  height: 54px;
  background: #fff;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 1rem;
  gap: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 9px;
  transition: all 0.3s ease-out;
  cursor: pointer;
  &:hover {
    background: #e8f0fe;
    transform: scale(1.05);
  }
  @media ${xs} {
    width: 100%;
  }
  @media ${lg} {
    width: 360px;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding-top: 1.2rem;
`;

const Input = styled.input`
  outline: none;
  border: none;
  width: 100%;
  box-sizing: border-box;
  width: 360px;
  height: 54px;
  background: #ffffff;
  border: 1px solid #e6e6e6;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 9px;
  padding-left: 1rem;
  @media ${xs} {
    width: 100%;
  }
  @media ${md} {
    width: 360px;
  }
  @media ${lg} {
    width: 360px;
  }
`;

const Button = styled.button`
  border: none;
  outline: none;
  background: #4577bc;
  width: 360px;
  height: 54px;
  background: #4577bc;
  border: 1px solid #e6e6e6;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 9px;
  color: #fff;
  cursor: pointer;
  @media ${xs} {
    width: 100%;
  }
  @media ${md} {
    width: 360px;
  }
  @media ${lg} {
    width: 360px;
  }
`;