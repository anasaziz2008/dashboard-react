import React from 'react'
import styles from './homepage.module.css'
import { AddProductComponent } from './addproduct'
import { AddinvoiceComponent } from './addinvoice'
import { AddbillComponent } from './addbill'
import { TotalproductsComponent } from './totalproducts'
import { TotalcustomerComponent } from './totalcustomers'
import { TotalVendorComponent } from './totalvendor'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Container } from 'react-bootstrap'

export const HomepageComponent = () => {
  return (
    <div>
<div className={styles.qwerty}>
        <AddProductComponent />
        <AddinvoiceComponent />
        <AddbillComponent />
        <TotalproductsComponent />
        <TotalcustomerComponent />
        <TotalVendorComponent />
  
</div> 
</div>



  )
}
