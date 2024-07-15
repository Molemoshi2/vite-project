//import sideImg from './assets/images/bg-sidebar-desktop.svg'
import Button from './Button';
import './index.css'
import InnerCard from './InnerCard';

function MainCard(){
    return(
        <div className='parent'>
            <div className="main-cont">
                <div className="main-child">
                    <ol>
                        <li>
                            <div className='listItem'>
                                <p>STEP 1</p>
                                <h4>YOUR INFO</h4>
                            </div>
                        </li>
                        <li>
                            <div className='listItem'>
                                <p>STEP 2</p>
                                <h4>SELECT PLAN</h4>
                            </div>
                        </li>
                        <li>
                            <div className='listItem'>
                                <p>STEP 3</p>
                                <h4>ADD-ONS</h4>
                            </div>
                        </li>
                        <li>
                            <div className='listItem'>
                                <p>STEP 4</p>
                                <h4>SUMMARY</h4>
                            </div>
                        </li>
                    </ol>
                </div>
                <div className='child2'>
                    <InnerCard/>
                    <Button ButtonName="Next Step"/>
                </div>{/*div that will be changing its content*/}
                
            </div>
        </div>
    );
}
export default MainCard