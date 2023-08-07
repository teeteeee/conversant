import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from "react";


interface Message {
  id: string;
  text: string;
  sender: 'User' | 'AI';
}

const Home: NextPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState<string>("");
  const [waitingForResponse, setWaitingForResponse] = useState<boolean>(false);

  const sendUserMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = userInput;
    setUserInput("");

    setWaitingForResponse(true);

    const userMessage: Message = {
      id: new Date().toISOString(),
      text: query,
      sender: "User",
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);

    const rawResponse = await fetch("http://localhost:8000/apiquery", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
      }),
    });

    setWaitingForResponse(false);

    const response = await rawResponse.json();
    const aiResponse = response.response as string;

    const aiMessage: Message = {
      id: new Date().toISOString(),
      text: aiResponse,
      sender: "AI",
    };

    setMessages((prevMessages) => [...prevMessages, aiMessage]);
  };

  return (
    <div className={styles.container}>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Conversation" />
        <link rel="icon" href="images/favicon.ico" />
        <title>ChatBot | ConnectMe | Chat Application</title>
      </Head>

      <main className="tyn-body">          
            <div className="tyn-root">
               <nav className="tyn-appbar">
                  <div className="tyn-appbar-wrap">
                      <div className="tyn-appbar-logo">
                          <a className="tyn-logo" href="index-2.html">
                          <Image
                            src="/public/images/padd_white_logo.png"
                            alt="Logo"
                            width={60} // Replace with the actual width of the image
                            height={100} // Replace with the actual height of the image
                          />                    
                          </a>
                      </div>
                      {/* <!-- tyn-logo --> */}
                      <div className="tyn-appbar-content">
                          Padd AI... your personal shopping assistant
                          <ul className="tyn-appbar-nav tyn-appbar-nav-end">
                              <li className="tyn-appbar-item dropdown">
                                  <a className="tyn-appbar-link dropdown-toggle" data-bs-toggle="dropdown" href="#" data-bs-offset="0,10">
                                      
                                      {/* <!-- grid-fill --> */}
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-grid-fill" viewBox="0 0 16 16">
                                          <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z" />
                                      </svg>
                                      <span className="d-none">Menu</span>
                                  </a>
                                  <div className="dropdown-menu dropdown-menu-auto dropdown-menu-end">
                                      <ul className="tyn-list-links">
                                          <li>
                                              <h6 className="tyn-list-links-heading">Quick Links</h6>
                                          </li>
                                          {/* <!-- li --> */}
                                          <li>
                                              <a href="index-2.html">
                                                  
                                                  {/* <!-- chat-text-fill --> */}
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-text-fill" viewBox="0 0 16 16">
                                                      <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z" />
                                                  </svg>
                                                  <span>Chats</span>
                                              </a>
                                          </li>
                                          {/* <!-- li --> */}
                                          <li>
                                              <a href="contacts.html">
                                                  
                                                  {/* <!-- person-lines-fill --> */}
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-lines-fill" viewBox="0 0 16 16">
                                                      <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                                                  </svg>
                                                  <span>Contacts</span>
                                              </a>
                                          </li>
                                          {/* <!-- li --> */}
                                          <li>
                                              <a href="stories.html">
                                                  
                                                  {/* <!-- subtract --> */}
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-subtract" viewBox="0 0 16 16">
                                                      <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z" />
                                                  </svg>
                                                  <span>Stories</span>
                                              </a>
                                          </li>
                                          {/* <!-- li --> */}
                                          <li>
                                              <a href="chat-bot.html">
                                                  
                                                  {/* <!-- robot --> */}
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-robot" viewBox="0 0 16 16">
                                                      <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z" />
                                                      <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z" />
                                                  </svg>
                                                  <span>ChatBot</span>
                                              </a>
                                          </li>
                                          {/* <!-- li --> */}
                                          <li>
                                              <a href="chat-bot-s2.html">
                                                  
                                                  {/* <!-- person-bounding-box --> */}
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-bounding-box" viewBox="0 0 16 16">
                                                      <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z" />
                                                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                                  </svg>
                                                  <span>ChatBot S2</span>
                                              </a>
                                          </li>
                                          {/* <!-- li --> */}
                                          <li>
                                              <a href="chat-bot-welcome.html">
                                                  
                                                  {/* <!-- door-open-fill --> */}
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-door-open-fill" viewBox="0 0 16 16">
                                                      <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
                                                  </svg>
                                                  <span>ChatBot Welcome</span>
                                              </a>
                                          </li>
                                          {/* <!-- li --> */}
                                          <li>
                                              <a href="pricing.html">
                                                  
                                                  {/* <!-- person-fill-up --> */}
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill-up" viewBox="0 0 16 16">
                                                      <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.354-5.854 1.5 1.5a.5.5 0 0 1-.708.708L13 11.707V14.5a.5.5 0 0 1-1 0v-2.793l-.646.647a.5.5 0 0 1-.708-.708l1.5-1.5a.5.5 0 0 1 .708 0ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                      <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z" />
                                                  </svg>
                                                  <span>Pricing</span>
                                              </a>
                                          </li>
                                          {/* <!-- li --> */}
                                          <li>
                                              <a href="faq.html">
                                                  
                                                  {/* <!-- question-octagon-fill --> */}
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-question-octagon-fill" viewBox="0 0 16 16">
                                                      <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zM5.496 6.033a.237.237 0 0 1-.24-.247C5.35 4.091 6.737 3.5 8.005 3.5c1.396 0 2.672.73 2.672 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.105a.25.25 0 0 1-.25.25h-.81a.25.25 0 0 1-.25-.246l-.004-.217c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.803 0-1.253.478-1.342 1.134-.018.137-.128.25-.266.25h-.825zm2.325 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927z" />
                                                  </svg>
                                                  <span>Faq</span>
                                              </a>
                                          </li>
                                          {/* <!-- li --> */}
                                          <li>
                                              <h6 className="tyn-list-links-heading">UI Components</h6>
                                          </li>
                                          {/* <!-- li --> */}
                                          <li>
                                              <a href="ui-chat-replies.html">
                                                  
                                                  {/* <!-- chat-right-text-fill --> */}
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-right-text-fill" viewBox="0 0 16 16">
                                                      <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2zM3.5 3h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z" />
                                                  </svg>
                                                  <span>Chat Replaies</span>
                                              </a>
                                          </li>
                                          {/* <!-- li --> */}
                                          <li>
                                              <a href="ui-usecase-modals.html">
                                                  
                                                  {/* <!-- front --> */}
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-front" viewBox="0 0 16 16">
                                                      <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm5 10v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2v5a2 2 0 0 1-2 2H5z" />
                                                  </svg>
                                                  <span>UseCase Modals</span>
                                              </a>
                                          </li>
                                          {/* <!-- li --> */}
                                          <li>
                                              <a href="ui-elements.html">
                                                  
                                                  {/* <!-- safe-fill --> */}
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-safe-fill" viewBox="0 0 16 16">
                                                      <path d="M9.778 9.414A2 2 0 1 1 6.95 6.586a2 2 0 0 1 2.828 2.828z" />
                                                      <path d="M2.5 0A1.5 1.5 0 0 0 1 1.5V3H.5a.5.5 0 0 0 0 1H1v3.5H.5a.5.5 0 0 0 0 1H1V12H.5a.5.5 0 0 0 0 1H1v1.5A1.5 1.5 0 0 0 2.5 16h12a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 14.5 0h-12zm3.036 4.464 1.09 1.09a3.003 3.003 0 0 1 3.476 0l1.09-1.09a.5.5 0 1 1 .707.708l-1.09 1.09c.74 1.037.74 2.44 0 3.476l1.09 1.09a.5.5 0 1 1-.707.708l-1.09-1.09a3.002 3.002 0 0 1-3.476 0l-1.09 1.09a.5.5 0 1 1-.708-.708l1.09-1.09a3.003 3.003 0 0 1 0-3.476l-1.09-1.09a.5.5 0 1 1 .708-.708zM14 6.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 1 0z" />
                                                  </svg>
                                                  <span>Misc Elements</span>
                                              </a>
                                          </li>
                                          {/* <!-- li --> */}
                                      </ul>
                                      {/* <!-- .tyn-list-links --> */}
                                  </div>
                                  {/* <!-- .dropdown-menu --> */}
                              </li>
                              {/* <!-- .tyn-appbar-item --> */}
                              <li className="tyn-appbar-item">
                                  <a className="tyn-appbar-link dropdown-toggle" data-bs-toggle="dropdown" href="#" data-bs-offset="0,10" data-bs-auto-close="outside">
                                      
                                      {/* <!-- app-indicator --> */}
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-app-indicator" viewBox="0 0 16 16">
                                          <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z" />
                                          <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                      </svg>
                                      <span className="d-none">Notifications</span>
                                  </a>
                                  <div className="dropdown-menu dropdown-menu-rg dropdown-menu-end">
                                      <div className="dropdown-head">
                                          <div className="title">
                                              <h6>Notifications</h6>
                                          </div>
                                          <ul className="nav nav-tabs nav-tabs-line">
                                              <li className="nav-item">
                                                  <button className="nav-link" data-bs-toggle="tab" data-bs-target="#notifications-unread" type="button"> Unread </button>
                                              </li>
                                              <li className="nav-item">
                                                  <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#notifications-all" type="button"> All </button>
                                              </li>
                                          </ul>
                                      </div>
                                      {/* <!-- .dropdown-head --> */}
                                      <div className="dropdown-gap">
                                          <ul className="tyn-media-list gap gap-3">
                                              <li>
                                                  <div className="tyn-media-group">
                                                      <div className="tyn-media tyn-circle">
                                                          <Image src="/images/avatar/1.jpg" alt="" width={200} // Replace with the actual width of the image
                            height={100}/>
                                                      </div>
                                                      <div className="tyn-media-col">
                                                          <div className="tyn-media-row">
                                                              <span className="message"><strong>Phillip Burke</strong> Sent message</span>
                                                          </div>
                                                          <div className="tyn-media-row">
                                                              <span className="meta">10 Hours ago</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  {/* <!-- .tyn-media-group --> */}
                                              </li>
                                              {/* <!-- li --> */}
                                              <li>
                                                  <div className="tyn-media-group align-items-start">
                                                      <div className="tyn-media tyn-circle">
                                                          <Image src="/images/avatar/2.jpg" alt="" width={200} height={100}/>
                                                      </div>
                                                      <div className="tyn-media-col">
                                                          <div className="tyn-media-row">
                                                              <span className="message">Missed call from <strong>Romy Schulte</strong></span>
                                                          </div>
                                                          <div className="tyn-media-row has-dot-sap">
                                                              <span className="meta">2 days ago</span>
                                                          </div>
                                                          <div className="tyn-media-row">
                                                              <ul className="tyn-btn-inline gap gap-2 pt-1">
                                                                  <li>
                                                                      <button className="btn btn-md btn-light">
                                                                          
                                                                          {/* <!-- telephone --> */}
                                                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                                                                              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                                                          </svg>
                                                                          <span>Call Back</span>
                                                                      </button>
                                                                  </li>
                                                              </ul>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  {/* <!-- .tyn-media-group --> */}
                                              </li>
                                              {/* <!-- li --> */}
                                              <li>
                                                  <div className="tyn-media-group align-items-start">
                                                      <div className="tyn-media tyn-circle">
                                                          <Image src="/images/avatar/3.jpg" alt="" width={200} //image
                            height={100}/>
                                                      </div>
                                                      <div className="tyn-media-col">
                                                          <div className="tyn-media-row">
                                                              <span className="message"><strong>Thomas Poulain</strong> Added You</span>
                                                          </div>
                                                          <div className="tyn-media-row has-dot-sap">
                                                              <span className="meta">1 weeks ago</span>
                                                          </div>
                                                          <div className="tyn-media-row">
                                                              <ul className="tyn-btn-inline gap gap-3 pt-1">
                                                                  <li>
                                                                      <button className="btn btn-md btn-primary">
                                                                          
                                                                          {/* <!-- check2-circle --> */}
                                                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                                                              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                                                                              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                                                                          </svg>
                                                                          <span>Accept</span>
                                                                      </button>
                                                                  </li>
                                                                  <li>
                                                                      <button className="btn btn-md btn-light">
                                                                          
                                                                          {/* <!-- x-circle --> */}
                                                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                                                                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                                              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                                          </svg>
                                                                          <span>Reject</span>
                                                                      </button>
                                                                  </li>
                                                              </ul>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  {/* <!-- .tyn-media-group --> */}
                                              </li>
                                              {/* <!-- li --> */}
                                              <li>
                                                  <div className="tyn-media-group">
                                                      <div className="tyn-media tyn-circle">
                                                          <Image src="/images/avatar/4.jpg" alt="" width={200} height={100}/>
                                                      </div>
                                                      <div className="tyn-media-col">
                                                          <div className="tyn-media-row">
                                                              <span className="message"><strong>Gabriel Schmitz</strong> Sent message</span>
                                                          </div>
                                                          <div className="tyn-media-row has-dot-sap">
                                                              <span className="meta">1 Months ago</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  {/* <!-- .tyn-media-group --> */}
                                              </li>
                                              {/* <!-- li --> */}
                                          </ul>
                                          {/* <!-- .tyn-media-list --> */}
                                      </div>
                                      {/* <!-- .dropdown-gap --> */}
                                  </div>
                                  {/* <!-- .dropdown-menu --> */}
                              </li>
                              {/* <!-- .tyn-appbar-item --> */}
                              <li className="tyn-appbar-item">
                                  <a className="d-inline-flex dropdown-toggle" data-bs-auto-close="outside" data-bs-toggle="dropdown" href="#" data-bs-offset="0,10">
                                      <div className="tyn-media tyn-size-lg tyn-circle">
                                          <Image src="/images/avatar/3.jpg" alt="" width={200} height={100} />
                                      </div>
                                  </a>
                                  <div className="dropdown-menu dropdown-menu-end">
                                      <div className="dropdown-gap">
                                          <div className="tyn-media-group">
                                              <div className="tyn-media tyn-size-lg">
                                                  <Image src="/images/avatar/3.jpg" alt=""  width={200} height={100} />
                                              </div>
                                              <div className="tyn-media-col">
                                                  <div className="tyn-media-row">
                                                      <h6 className="name">Marie George</h6>
                                                      <div className="indicator varified">
                                                          
                                                          {/* <!-- check-circle-fill --> */}
                                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                          </svg>
                                                      </div>
                                                  </div>
                                                  <div className="tyn-media-row has-dot-sap">
                                                      <p className="content">Liked that disco music</p>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      {/* <!-- .dropdown-gap --> */}
                                      <div className="dropdown-gap">
                                          <div className="d-flex gap gap-2">
                                              
                                              {/* <!-- moon-fill --> */}
                                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moon-fill" viewBox="0 0 16 16">
                                                  <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                                              </svg>
                                              <div>
                                                  <h6>Darkmode</h6>
                                                  <ul className="d-flex align-items-center gap gap-3">
                                                      <li className="inline-flex">
                                                          <div className="form-check">
                                                              <input className="form-check-input" type="radio" name="themeMode" id="dark" value="dark" />
                                                              <label className="form-check-label small" htmlFor="dark"> On </label>
                                                          </div>
                                                      </li>
                                                      <li className="inline-flex">
                                                          <div className="form-check">
                                                              <input className="form-check-input" type="radio" name="themeMode" id="light" value="light" checked />
                                                              <label className="form-check-label small" htmlFor="light"> Off </label>
                                                          </div>
                                                      </li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </div>
                                      <ul className="tyn-list-links">
                                          <li>
                                              <a href="profile.html#profile-index">
                                                  
                                                  {/* <!-- person --> */}
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                                                  </svg>
                                                  <span>Profile</span>
                                              </a>
                                          </li>
                                          <li>
                                              <a href="profile.html#profile-settings">
                                                  
                                                  {/* <!-- gear --> */}
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
                                                      <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                                                      <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                                                  </svg>
                                                  <span>Settings</span>
                                              </a>
                                          </li>
                                          <li>
                                              <a href="profile.html#profile-change-password">
                                                  
                                                  {/* <!-- unlock --> */}
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-unlock" viewBox="0 0 16 16">
                                                      <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2zM3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H3z" />
                                                  </svg>
                                                  <span>Change Password</span>
                                              </a>
                                          </li>
                                          <li className="dropdown-divider"></li>
                                          <li>
                                              <a href="login.html">
                                                  
                                                  {/* <!-- power --> */}
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-power" viewBox="0 0 16 16">
                                                      <path d="M7.5 1v7h1V1h-1z" />
                                                      <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z" />
                                                  </svg>
                                                  <span>Log Out</span>
                                              </a>
                                          </li>
                                      </ul>
                                      {/* <!-- .tyn-list-links --> */}
                                  </div>
                                  {/* <!-- .dropdown-menu --> */}
                              </li>
                              {/* <!-- .tyn-appbar-item --> */}
                          </ul>                    
                      </div>
                      {/* <!-- .tyn-appbar-content --> */}
                  </div>
                  {/* <!-- .tyn-appbar-wrap --> */}
              </nav>
              {/* <!-- .tyn-appbar --> */}
              <div className="tyn-content tyn-content-full-height tyn-chatbot tyn-chatbot-page has-aside-base">
                  <div className="tyn-aside tyn-aside-base">
                      <div className="tyn-aside-head">
                          <div className="tyn-aside-head-text">
                              <h3 className="tyn-aside-title tyn-title">History</h3>
                              {/* <span className="tyn-subtext">200+ Conversations </span> */}
                          </div>
                          <div className="tyn-aside-head-tools">
                              <ul className="tyn-list-inline gap gap-3">
                                  <li><a className="btn btn-icon btn-light btn-md btn-pill" href="chat-bot-welcome.html">
                                          
                                          {/* <!-- plus-lg --> */}
                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                              <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                                          </svg>
                                      </a></li>
                              </ul>
                          </div>
                      </div>
                      {/* <!-- .tyn-aside-head --> */}
                      <div className="tyn-aside-body" data-simplebar>
                          <ul className="tyn-aside-list">
                              <li className="tyn-aside-item js-toggle-main active">
                                  <div className="tyn-media-group">
                                      <div className="tyn-media tyn-size-sm">
                                          
                                          {/* <!-- chat-right-text-fill --> */}
                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-right-text-fill" viewBox="0 0 16 16">
                                              <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2zM3.5 3h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z" />
                                          </svg>
                                      </div>
                                      <div className="tyn-media-col">
                                          <div className="content">Purchase - 6/30/23</div>
                                      </div>
                                  </div>
                              </li>
                              {/* <!-- .tyn-aside-item --> */}
                              <li className="tyn-aside-item js-toggle-main">
                                  <div className="tyn-media-group">
                                      <div className="tyn-media tyn-size-sm">
                                          
                                          {/* <!-- chat-right-text-fill --> */}
                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-right-text-fill" viewBox="0 0 16 16">
                                              <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2zM3.5 3h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z" />
                                          </svg>
                                      </div>
                                      <div className="tyn-media-col">
                                          <div className="content">Task Created - 6/29/23</div>
                                      </div>
                                  </div>
                              </li>
                              {/* <!-- .tyn-aside-item --> */}
                              <li className="tyn-aside-item js-toggle-main">
                                  <div className="tyn-media-group">
                                      <div className="tyn-media tyn-size-sm">
                                          
                                          {/* <!-- chat-right-text-fill --> */}
                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-right-text-fill" viewBox="0 0 16 16">
                                              <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2zM3.5 3h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z" />
                                          </svg>
                                      </div>
                                      <div className="tyn-media-col">
                                          <div className="content">Inquiry - 6/28/23</div>
                                      </div>
                                  </div>
                              </li>                       
                          </ul>
                      </div>
                      {/* <!-- .tyn-aside-body --> */}
                      <div className="tyn-aside-foot">
                          <div className="w-100">
                              <ul className="row gx-3">
                                  <li className="col-6">
                                      <a href="pricing.html" className="btn btn-light tyn-size-lg w-100 flex-column py-2 pt-3">
                                          
                                          {/* <!-- person-up --> */}
                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-text" viewBox="0 0 16 16">
                                              <path d="M4.5 0h7a.5.5 0 0 1 .5.5v1.793l-2.146 2.147a.5.5 0 0 0 0 .708L13.207 8l-3.854 3.854a.5.5 0 0 0-.708 0L7 10.207V12.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5zm5 4a.5.5 0 0 0-1 0v1H4a.5.5 0 0 0 0 1h4v1a.5.5 0 0 0 1 0V5zm-1-4H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-3zm-1 1v2a.5.5 0 0 0 0 1v2a.5.5 0 0 0 0 1v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0 0-1V8a.5.5 0 0 0 0-1V5a.5.5 0 0 0-1 0zm2 3H8a.5.5 0 0 0 0 1h2v2a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0V8z"/>
                                          </svg>

                                          <span className="small text-nowrap mt-n1">Invoice & Orders</span>
                                      </a>
                                  </li>
                                  <li className="col-6">
                                      <button className="btn btn-light tyn-size-lg w-100 flex-column py-2 pt-3">
                                          
                                          {/* <!-- trash --> */}
                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                          </svg>
                                          <span className="small text-nowrap mt-n1">Clear History</span>
                                      </button>
                                  </li>
                              </ul>
                          </div>
                      </div>
                      {/* <!-- .tyn-aside-head --> */}
                  </div>
                  {/* <!-- .tyn-aside --> */}
                  <div className="tyn-main tyn-main-boxed tyn-main-boxed-lg" id="tynMain">
                      <ul className="tyn-list-inline d-md-none translate-middle-x position-absolute start-50 z-1">
                          <li>
                              <button className="btn btn-icon btn-pill btn-white js-toggle-main">
                                  
                                  {/* <!-- x-lg --> */}
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                  </svg>
                              </button>
                          </li>
                      </ul>

                      <div className="tyn-chat-body m-4 rounded-3" data-simplebar>
                        <div className="conversation tyn-qa" style={{ maxHeight: '700px' }}>
                          {/* Render messages */}
                          <div className="tyn-qa-item">
                            <div className="tyn-qa-avatar">
                                <div className="tyn-qa-avatar-wrap">
                                    <div className="tyn-media tyn-size-md">
                                        <img src="images/avatar/bot-1.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="tyn-qa-message tyn-text-block" >                                       
                                <p>Hey, I’m your personal shopping assistant. Welcome to our store. How can I assist you today?</p>
                            </div>                                        
                        </div>   
                          {messages.map((message) => (
                            <div className="tyn-qa" key={message.id}>
                            <div className="tyn-qa-item" >
                              <div className="tyn-qa-avatar">
                                <div className="tyn-media tyn-size-md">
                                  <Image src={message.sender === "AI" ? "/images/avatar/bot-1.jpg" : "/images/avatar/1.jpg"} alt=""  width={2} height={100} />
                                </div>
                              </div> 
                              <div className="tyn-qa-message tyn-text-block">
                                <div>
                                  {message.sender == "AI"}
                                </div>
                                <div>
                                  {message.text}
                                </div>
                                <div>
                                    {message.sender == "User"}
                                </div>
                              </div>                              
                            </div>
                            </div>
                          ))}
                        </div>
                      </div>
      {/* <div className="tyn-qa-message tyn-text-block">
                                {message.sender === "AI" ? (
                                  waitingForResponse ? (
                                    <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                style={{
                                                margin: 'auto',
                                                background: 'rgb(255, 255, 255)',
                                                display: 'block',
                                                shapeRendering: 'auto',
                                                animation: 'moveLeft 2s infinite',
                                                }}
                                                width="50px"
                                                height="50px"
                                                viewBox="0 0 100 100"
                                                preserveAspectRatio="xMidYMid"
                                                >
                                               <>
                                                <circle cx={84} cy={50} r={10} fill="#93c5fd">
                                                  <animate
                                                    attributeName="r"
                                                    repeatCount="indefinite"
                                                    dur="0.4716981132075471s"
                                                    calcMode="spline"
                                                    keyTimes="0;1"
                                                    values="10;0"
                                                    keySplines="0 0.5 0.5 1"
                                                    begin="0s"
                                                  />
                                                  <animate
                                                    attributeName="fill"
                                                    repeatCount="indefinite"
                                                    dur="1.8867924528301885s"
                                                    calcMode="discrete"
                                                    keyTimes="0;0.25;0.5;0.75;1"
                                                    values="#93c5fd;#93c5fd;#93c5fd;#93c5fd;#93c5fd"
                                                    begin="0s"
                                                  />
                                                </circle>
                                                <circle cx={16} cy={50} r={10} fill="#93c5fd">
                                                  <animate
                                                    attributeName="r"
                                                    repeatCount="indefinite"
                                                    dur="1.8867924528301885s"
                                                    calcMode="spline"
                                                    keyTimes="0;0.25;0.5;0.75;1"
                                                    values="0;0;10;10;10"
                                                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                                                    begin="0s"
                                                  />
                                                  <animate
                                                    attributeName="cx"
                                                    repeatCount="indefinite"
                                                    dur="1.8867924528301885s"
                                                    calcMode="spline"
                                                    keyTimes="0;0.25;0.5;0.75;1"
                                                    values="16;16;16;50;84"
                                                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                                                    begin="0s"
                                                  />
                                                </circle>
                                                <circle cx={50} cy={50} r={10} fill="#93c5fd">
                                                  <animate
                                                    attributeName="r"
                                                    repeatCount="indefinite"
                                                    dur="1.8867924528301885s"
                                                    calcMode="spline"
                                                    keyTimes="0;0.25;0.5;0.75;1"
                                                    values="0;0;10;10;10"
                                                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                                                    begin="-0.4716981132075471s"
                                                  />
                                                  <animate
                                                    attributeName="cx"
                                                    repeatCount="indefinite"
                                                    dur="1.8867924528301885s"
                                                    calcMode="spline"
                                                    keyTimes="0;0.25;0.5;0.75;1"
                                                    values="16;16;16;50;84"
                                                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                                                    begin="-0.4716981132075471s"
                                                  />
                                                </circle>
                                                <circle cx={84} cy={50} r={10} fill="#93c5fd">
                                                  <animate
                                                    attributeName="r"
                                                    repeatCount="indefinite"
                                                    dur="1.8867924528301885s"
                                                    calcMode="spline"
                                                    keyTimes="0;0.25;0.5;0.75;1"
                                                    values="0;0;10;10;10"
                                                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                                                    begin="-0.9433962264150942s"
                                                  />
                                                  <animate
                                                    attributeName="cx"
                                                    repeatCount="indefinite"
                                                    dur="1.8867924528301885s"
                                                    calcMode="spline"
                                                    keyTimes="0;0.25;0.5;0.75;1"
                                                    values="16;16;16;50;84"
                                                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                                                    begin="-0.9433962264150942s"
                                                  />
                                                </circle>
                                                <circle cx={16} cy={50} r={10} fill="#93c5fd">
                                                  <animate
                                                    attributeName="r"
                                                    repeatCount="indefinite"
                                                    dur="1.8867924528301885s"
                                                    calcMode="spline"
                                                    keyTimes="0;0.25;0.5;0.75;1"
                                                    values="0;0;10;10;10"
                                                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                                                    begin="-1.4150943396226414s"
                                                  />
                                                  <animate
                                                    attributeName="cx"
                                                    repeatCount="indefinite"
                                                    dur="1.8867924528301885s"
                                                    calcMode="spline"
                                                    keyTimes="0;0.25;0.5;0.75;1"
                                                    values="16;16;16;50;84"
                                                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                                                    begin="-1.4150943396226414s"
                                                  />
                                                </circle>
                                              </>
                                              </svg> 
                                  ) : (
                                    <p>{message.text}</p>
                                  )
                                ) : (
                                  message.sender === "User" && <p>{message.text}</p>
                                )}
                              </div> */}
                      {/* User input form */}
        <form onSubmit={sendUserMessage} className="tyn-chat-form border-0 ps-3 pe-4 py-3 bg-white mb-4 mx-4 rounded-3">
          <div className="tyn-chat-form-enter">
            <div className="tyn-chat-form-input" id="tynChatInput">
              <input
                type="text"
                className="form-control"
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Ask me anything..."
                value={userInput}
                autoComplete="off"
              />
            </div>
            <ul className="tyn-list-inline me-n2 my-1">
              <li>
                <button className="btn btn-icon btn-white btn-md btn-pill">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
                                              <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                                          </svg>
                </button>
              </li>
            </ul>
          </div>
        </form>
                      {/* <!-- .tyn-chat-form --> */}
                  </div>
                  {/* <!-- .tyn-chat-content --> */}
              </div>
              <div className="tyn-quick-chat" id="tynQuickChat">
                  <button className="tyn-quick-chat-toggle js-toggle-quick">
                      <svg viewBox="0 0 43 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M37.2654 14.793C37.2654 14.793 45.0771 20.3653 41.9525 29.5311C41.9525 29.5311 41.3796 31.1976 39.0361 34.4264L42.4732 37.9677C42.4732 37.9677 43.3065 39.478 41.5879 39.9987H24.9229C24.9229 39.9987 19.611 40.155 14.8198 36.9782C14.8198 36.9782 12.1638 35.2076 9.76825 31.9787L18.6215 32.0308C18.6215 32.0308 24.298 31.9787 29.7662 28.3333C35.2344 24.6878 37.4217 18.6988 37.2654 14.793Z" fill="#60A5FA" />
                          <path d="M34.5053 12.814C32.2659 1.04441 19.3506 0.0549276 19.3506 0.0549276C8.31004 -0.674164 3.31055 6.09597 3.31055 6.09597C-4.24076 15.2617 3.6751 23.6983 3.6751 23.6983C3.6751 23.6983 2.99808 24.6357 0.862884 26.5105C-1.27231 28.3854 1.22743 29.3748 1.22743 29.3748H17.3404C23.4543 28.7499 25.9124 27.3959 25.9124 27.3959C36.328 22.0318 34.5053 12.814 34.5053 12.814ZM19.9963 18.7301H9.16412C8.41419 18.7301 7.81009 18.126 7.81009 17.3761C7.81009 16.6261 8.41419 16.022 9.16412 16.022H19.9963C20.7463 16.022 21.3504 16.6261 21.3504 17.3761C21.3504 18.126 20.7358 18.7301 19.9963 18.7301ZM25.3708 13.314H9.12245C8.37253 13.314 7.76843 12.7099 7.76843 11.96C7.76843 11.21 8.37253 10.6059 9.12245 10.6059H25.3708C26.1207 10.6059 26.7248 11.21 26.7248 11.96C26.7248 12.7099 26.1103 13.314 25.3708 13.314Z" fill="#2563EB" />
                      </svg>
                      <span className="badge bg-primary top-0 end-0 position-absolute rounded-pill">2</span>
                  </button>
                  <div className="tyn-quick-chat-box">
                      <div className="tyn-quick-chat-head">
                          <div className="tyn-media-group">
                              <div className="tyn-media tyn-size-rg">
                                  <Image src="/images/avatar/1.jpg" alt=""  width={200} height={100} />

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
                                          <div className="tyn-reply-text"> Do you know which App or feature it will require to set up. </div>
                                          {/* <!-- tyn-reply-text --> */}
                                      </div>
                                      {/* <!-- .tyn-reply-bubble --> */}
                                      <div className="tyn-reply-bubble">
                                          <div className="tyn-reply-text"> These article helps. </div>
                                          {/* <!-- tyn-reply-text --> */}
                                      </div>
                                      {/* <!-- .tyn-reply-bubble --> */}
                                  </div>
                                  {/* <!-- .tyn-reply-group --> */}
                              </div>
                              {/* <!-- .tyn-reply-item --> */}
                              <div className="tyn-reply-item incoming">
                                  <div className="tyn-reply-avatar">
                                      <div className="tyn-media tyn-size-md tyn-circle">
                                          <Image src="/images/avatar/2.jpg" alt=""  width={200} height={100} />

                                      </div>
                                  </div>
                                  <div className="tyn-reply-group">
                                      <div className="tyn-reply-bubble">
                                          <div className="tyn-reply-link">
                                              <a className="tyn-reply-anchor" href="https://www.envato.com/atomic-power-plant-engine/">https://www.envato.com/atomic-power-plant-engine/</a>
                                          </div>
                                      </div>
                                      {/* <!-- .tyn-reply-bubble --> */}
                                      <div className="tyn-reply-bubble">
                                          <div className="tyn-reply-text"> I hope these article helps. </div>
                                      </div>
                                      {/* <!-- .tyn-reply-bubble --> */}
                                  </div>
                                  {/* <!-- .tyn-reply-group --> */}
                              </div>
                              {/* <!-- .tyn-reply-item --> */}
                              <div className="tyn-reply-separator">May 10, 2022, 11:14 AM</div>
                              <div className="tyn-reply-item outgoing">
                                  <div className="tyn-reply-group">
                                      <div className="tyn-reply-bubble">
                                      <div className="tyn-reply-text">
  Yes, you can reset your password online. Go to the login page, click on &quot;Forgot Password,&quot; and follow the instructions to reset it.
</div>
{/* <!-- tyn-reply-text --> */}
                                      </div>
                                      {/* <!-- .tyn-reply-bubble --> */}
                                  </div>
                                  {/* <!-- .tyn-reply-group --> */}
                              </div>
                              {/* <!-- .tyn-reply-item --> */}
                              <div className="tyn-reply-item incoming">
                                  <div className="tyn-reply-avatar">
                                      <div className="tyn-media tyn-size-md tyn-circle">
                                          <Image src="/images/avatar/2.jpg" alt=""  width={200} height={100} />

                                      </div>
                                  </div>
                                  <div className="tyn-reply-group">
                                      <div className="tyn-reply-bubble">
                                          <div className="tyn-reply-text"> How do I reset my password? Can I do it online? </div>
                                      </div>
                                      {/* <!-- .tyn-reply-bubble --> */}
                                  </div>
                                  {/* <!-- .tyn-reply-group --> */}
                              </div>
                              {/* <!-- .tyn-reply-item --> */}
                          </div>
                          {/* <!-- .tyn-reply --> */}
                      </div>
                      <div className="tyn-quick-chat-form">
                          <div className="tyn-chat-form-input bg-light" id="tynQuickChatInput" contentEditable={true}></div>
                              
                          <ul className="tyn-list-inline me-n2 my-1">
                              <li><button className="btn btn-icon btn-white btn-sm btn-pill">
                                      
                                      {/* <!-- send-fill --> */}
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
                                          <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                                      </svg>
                                  </button></li>
                          </ul>
                      </div>
                      <button className="btn btn-danger btn-sm btn-icon top-0 end-0 position-absolute rounded-pill translate-middle js-toggle-quick">
                          
                          {/* <!-- x-lg --> */}
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                          </svg>
                      </button>
                  </div>
              </div>
            </div>

          </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}

export default Home
