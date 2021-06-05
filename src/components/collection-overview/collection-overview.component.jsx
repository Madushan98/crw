import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CollectionPreview from '../preview-collection/preview-collection.component'
import { selectShopDataForPreview } from '../../redux/shop/shop.selector'

import './collection-overview.styles.scss'


const CollectionOverview = ({ collections }) => (
    <div className="collection-overview">
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({

    collections: selectShopDataForPreview,
})


export default connect(mapStateToProps)(CollectionOverview);