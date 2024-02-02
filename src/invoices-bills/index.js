import React from 'react'
import styles from './invoicebill.module.css'
import { InvoicetableComponent } from './invoices'
import { BilltableComponent } from './bills'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'


export const InvoiceBillComponent = () => {
  return (
 <div className={styles.box}>
        <InvoicetableComponent/>
      
        <BilltableComponent/>
    </div>
  )
}
