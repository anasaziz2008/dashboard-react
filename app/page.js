
import { SidebarComponent } from '@/src/Sidebar';
import styles from './page.module.css'
import { HomepageComponent } from '@/src/homepage';
import { InvoiceBillComponent } from '@/src/invoices-bills';

export default function Home() {
  return (
   <div className={styles.layout}>
   
   <SidebarComponent/>
   <div>
   <HomepageComponent/>
   <InvoiceBillComponent/>
   </div>
   
  </div>
  );
}


