import React from 'react';
import { connect } from 'react-redux';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionsLink, OptionsDiv } from './header.styles'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { ReactComponent as Logo } from '../../assets/4.3 crown.svg'
import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden, selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
const Header = ({ currentUser, hidden }) => (

    <HeaderContainer>
        <LogoContainer to="/"
        >
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionsLink to="/shop"
            >
                SHOP
            </OptionsLink>
            <OptionsLink to="/shop"
            >
                CONTACT
            </OptionsLink>


            {

                currentUser ?
                    <OptionsDiv onClick={() => auth.signOut()}>SIGN OUT</OptionsDiv>
                    :
                    <OptionsLink to='/signin'>SIGN IN</OptionsLink>
            }

            <CartIcon />

        </OptionsContainer>
        {
            hidden ? null :
                <CartDropdown />
        }
    </HeaderContainer>

)
// const mapStateToProps = state => {
//     return {
//         currentUser: selectCurrentUser(state),
//         hidden: selectCartHidden(state)
//     }
// };


const mapStateToProps = createStructuredSelector({

    currentUser: selectCurrentUser,
    hidden: selectCartHidden

});

// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
//     currentUser,
//     hidden
// });

export default connect(mapStateToProps)(Header);