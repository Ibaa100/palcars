import React from 'react';
import Logo from '../../../public/logo (2).png';

function HeaderLayout() {
    return (
        <div class="d-flex  justify-content-around" >
            <nav class="navbar bg-body-tertiary  ">
                <div class="container-fluid">
                    <div className={`nav-logo `}>
                        <a href='/'>
                            <img src={logo} alt="logo" className="nav-logo-img" />
                        </a>
                    </div>
                    <div class="hstack gap-3">
                        <div class="p-2">
                         <p>notification</p>
                        </div>
                        <div class="p-2" >
                            <ul class="d-flex justify-content-around">
                                <li>
                                    <button  class="btn btn-success"> Login</button>
                                </li>
                                <li>
                                    <button  class="btn btn-danger"> SignUp</button>
                               </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}



export default HeaderLayout;
