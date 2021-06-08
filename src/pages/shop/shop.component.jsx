
import React from 'react';
import SHOP_DATA from './shop.data';

import { Route } from 'react-router-dom';

import CollectionPreview from '../../components/preview-collection/preview-collection.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopData } from '../../redux/shop/shop.selector'

import CategoryPage from '../../components/category/category.component';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';

import { firestore, convertCollectionSnapShotToMap } from '../../firebase/firebase.utils'

import { updateCollections } from '../../redux/shop/shop.actions'


// class ShopPage extends react.Component {
//     constructor(props) {
//         super(props);


//         this.state = {
//             collections: SHOP_DATA

//         }

//     }



//     render() {

//         const { collections } = this.state
//         return (
//             <div className='shop-page'>
//                 {
//                     collections.map(({ id, ...otherCollectionProps }) => (
//                         <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
//                     ))
//                 }
//             </div>

//         );
//     }

// }





class ShopPage extends React.Component {

    unsubscribeFromAuth = null;


    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromAuth = collectionRef.onSnapshot(async snapshot => {

            const collectionMap = convertCollectionSnapShotToMap(snapshot);
            updateCollections(collectionMap);
        }

        )

    }

    render() {



        const { match } = this.props;
        return (<div className='shop-page'>

            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route exact path={`${match.path}/:categoryId`} component={CategoryPage} />

        </div>)

    }

}


// const ShopPage = ({ match }) => (
//     <div className='shop-page'>

//         <Route exact path={`${match.path}`} component={CollectionOverview} />
//         <Route exact path={`${match.path}/:categoryId`} component={CategoryPage} />

//     </div>
// )


// const mapStateToProps = state => ({

//     collections: state.shop.shopData
// })

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})


export default connect(null, mapDispatchToProps)(ShopPage);

