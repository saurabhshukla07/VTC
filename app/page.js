"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import pic from '../public/images/dp.jpg'
import logo from '../public/images/unfluke.jpg'
import Customers from './components/Customers'
import Link from 'next/link'

import { RiMenu2Fill } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";

import { IonIcon } from '@ionic/react';
import { logoIonic, peopleOutline, chatbubbleOutline, homeOutline, helpOutline, lockClosedOutline, settingsOutline, logOutOutline, searchOutline, eyeOutline, cartOutline, cashOutline, notificationsOutline, arrowBack, arrowBackOutline, documentTextOutline } from 'ionicons/icons';




const page = () => {
    const [handleDashboard,setHandleDashboar]=useState(false);
    return (
    <div>
    


   
    <div className="container"> 
        <div className={handleDashboard?("navigation active"):"navigation"}>

       <div> <h2 className="logo-main text-2xl"> Worklin® </h2></div>
                 

            <ul className='side-nav  '>

                <li>
               
                    <a href="#">
                        <span className="title"> <p className='p-8 text-white'> Pour,NOBLESSE PLUS SARL</p></span>
                    </a>
                </li>
                
                <li className='hover:bg-custom-gradient hover:text-white'>
                    <a href="#">
                        <span className="icon">
                        <IonIcon icon={homeOutline}></IonIcon>
                        
                        </span>
                        <span className="title">Tableau de bord</span>
                    </a>
                    
                </li>

                <li className='hover:bg-custom-gradient hover:text-white'>
                     <a href="#">
                        <span className="icon">
                            {/* <ion-icon name="people-outline"></ion-icon> */}
                            <IonIcon icon={peopleOutline}></IonIcon>
                        </span>
                        <span className="title">Employés</span>
                       
                    </a> 
                  
                </li>

                <li className='hover:bg-custom-gradient hover:text-white'>
                    <a href="#">
                        <span className="icon">
                            {/* <ion-icon name="chatbubble-outline"></ion-icon> */}
                            <IonIcon icon={chatbubbleOutline}></IonIcon>
                        </span>
                        <span className="title">Presence</span>
                    </a>
                </li>

                <li className='hover:bg-custom-gradient hover:text-white'>
                    <a href="#">
                        <span className="icon">
                            {/* <ion-icon name="help-outline"></ion-icon> */}
                            <IonIcon icon={helpOutline}></IonIcon>
                        </span>
                        <span className="title">Rapports</span>
                    </a>
                </li>

                <li className='hover:bg-custom-gradient hover:text-white'>
                    <a href="#">
                        <span className="icon">
                            {/* <ion-icon name="settings-outline"></ion-icon> */}
                            <IonIcon icon={settingsOutline}></IonIcon>
                        </span>
                        <span className="title">Gestion de la paie</span>
                    </a>
                </li>

                <li className='hover:bg-custom-gradient hover:text-white'>  
                    <a href="#">
                        <span className="icon">
                            {/* <ion-icon name="lock-closed-outline"></ion-icon> */}
                            <IonIcon icon={lockClosedOutline}></IonIcon>
                        </span>
                        <span className="title">Gestion des congés</span>
                    </a>
                </li>

                <li className='hover:bg-custom-gradient hover:text-white'>
                    <a href="#">
                        <span className="icon">
                            {/* <ion-icon name="log-out-outline"></ion-icon> */}
                            <IonIcon icon={logOutOutline}></IonIcon>
                        </span>
                        <span className="title">Messagerie</span>
                    </a>
                </li>
                <li className='hover:bg-custom-gradient hover:text-white'>
                    <a href="#">
                        <span className="icon">
                            {/* <ion-icon name="log-out-outline"></ion-icon> */}
                            <IonIcon icon={documentTextOutline}></IonIcon>
                        </span>
                        <span className="title">Documents</span>
                    </a>
                </li>
            </ul>
        </div>

      
        <div className={handleDashboard?("main active"):"main"}>
            <div className="topbar ">
            <div className="toggle" >
            {/* <RiMenu2Fill /> */}
            <IonIcon  icon={arrowBackOutline}></IonIcon>
                </div>
                <h3 className='text-xl'>Tableau de bord</h3>
                <div className="search">
                    <label>
                    <IonIcon icon={searchOutline}></IonIcon> 
                        <input className='text-black'
                        
                        
                        type="text" placeholder="Rechercher tout ici"/>
                        
                    </label>
                </div>
  <div><IonIcon icon={notificationsOutline}></IonIcon> </div>
                <div className="user">
                
                    <img src={pic.src} alt="dpp"/>
                </div>
            </div>

        
            <div className="cardBox">
                <div className="card">
                    <div>
                        <div className="numbers">452</div>
                        <div className="cardName">Vues quotidiennes</div>
                    </div>

                    <div className="iconBx">
                        {/* <ion-icon name="eye-outline"></ion-icon> */}
                        <IonIcon icon={eyeOutline}></IonIcon>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <div className="numbers">62</div>
                        <div className="cardName">Arrivés en retard</div>
                    </div>

                    <div className="iconBx">
                        {/* <ion-icon name="cart-outline"></ion-icon> */}
                        <IonIcon icon={cartOutline}></IonIcon>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <div className="numbers">360</div>
                        <div className="cardName">A l'heure</div>
                    </div>

                    <div className="iconBx">
                        {/* <ion-icon name="chatbubbles-outline"></ion-icon> */}
                        <IonIcon icon={chatbubbleOutline}></IonIcon>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <div className="numbers">30</div>
                        <div className="cardName">Absent</div>
                    </div>

                    <div className="iconBx">
                        {/* <ion-icon name="cash-outline"></ion-icon> */}
                        <IonIcon icon={cashOutline}></IonIcon>
                    </div>
                </div>
            </div>

    
            <div className="details">
                <div className="recentOrders">
                    <div className="cardHeader">
                        <h2>Paiement du salaire</h2>
                        <a href="#" className="btn">Voir tout</a>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <td>Nom</td>
                                <td>Salaire</td>
                                <td>Paiement</td>
                                <td>Statut</td>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Employés </td>
                                    <td>$1200</td>
                                <td>Paid</td>
                                <td><span className="status delivered">Livré</span></td>
                            </tr>

                            <tr>
                                <td>Employés</td>
                                <td>$110</td>
                                <td>Due</td>
                                <td><span className="status return">En attente</span></td>
                            </tr>

                            <tr>
                                <td>Employés</td>
                                <td>$1200</td>
                                <td>Paid</td>
                                <td><span className="status delivered">Retour</span></td>
                            </tr>

                            <tr>
                                <td>Employés</td>
                                <td>$620</td>
                                <td>Due</td>
                                <td><span className="status inProgress">En cours</span></td>
                            </tr>

                            <tr>
                                <td>Employés</td>
                                <td>$1200</td>
                                <td>Paid</td>
                                <td><span className="status delivered">Livré</span></td>
                            </tr>

                        

                         
                        </tbody>
                    </table>
                </div>

              
                <div className="recentCustomers">
                    <div className="cardHeader">
                        <h2>Employés de connexion récents</h2>
                    </div>

                    <table>
                      <tbody>
                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src={pic.src} alt="pic1"/></div>
                            </td>
                            <td>
                                <h4>Saurabh <br/> <span>Italy</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src={pic.src} alt="pic2"/></div>
                            </td>
                            <td>
                                <h4>Saurabh <br/> <span>India</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src={pic.src} alt=""/></div>
                            </td>
                            <td>
                                <h4>Saurabh <br/> <span>Italy</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src={pic.src} alt=""/></div>
                            </td>
                            <td>
                                <h4>Saurabh <br/> <span>India</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src={pic.src} alt=""/></div>
                            </td>
                            <td>
                                <h4>Saurabh <br/> <span>Italy</span></h4>
                            </td>
                        </tr>

  </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

 
   

    </div>
  )
}

export default page
