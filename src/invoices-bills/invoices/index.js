import React from "react";
import styles from "./invoice.module.css";
export const InvoicetableComponent = () => {
  return (
    <div>
      <strong style={{fontSize:'20px'}}>Invoice</strong>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.columnStyle}>Date</th>
            <th className={styles.columnStyle}>Customer</th>
            <th className={styles.columnStyle}>Download</th>
            <th className={styles.columnStyle}>Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>25-09-2023 </td>
            <td>Eastern Motors </td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
           
              >
                <path
                  d="M2.66667 10.6693V11.3333C2.66667 11.8638 2.87739 12.3725 3.25246 12.7475C3.62753 13.1226 4.13624 13.3333 4.66667 13.3333H11.3333C11.8638 13.3333 12.3725 13.1226 12.7476 12.7475C13.1226 12.3725 13.3333 11.8638 13.3333 11.3333V10.6667M8 3V10.3333M8 10.3333L10.3333 8M8 10.3333L5.66667 8"
                  stroke="#63C98E"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>{" "}
            </td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.3033 3.61067C14.3667 3.70681 14.3949 3.82186 14.3832 3.93639C14.3716 4.05093 14.3207 4.15793 14.2393 4.23934L8.11067 10.3673C8.04797 10.43 7.96974 10.4749 7.884 10.4973L5.33133 11.164C5.24695 11.186 5.15828 11.1856 5.07413 11.1627C4.98997 11.1399 4.91326 11.0954 4.8516 11.0337C4.78993 10.9721 4.74547 10.8954 4.72262 10.8112C4.69977 10.7271 4.69933 10.6384 4.72133 10.554L5.388 8.002C5.40746 7.9254 5.44417 7.85425 5.49533 7.794L11.6467 1.64667C11.7404 1.55304 11.8675 1.50044 12 1.50044C12.1325 1.50044 12.2596 1.55304 12.3533 1.64667L14.2393 3.532C14.2633 3.55601 14.2847 3.58236 14.3033 3.61067ZM13.1787 3.88534L12 2.70734L6.32133 8.386L5.90467 9.98134L7.5 9.56467L13.1787 3.88534Z"
                  fill="#BDB841"
                />
                <path
                  d="M13.094 11.44C13.2762 9.88264 13.3344 8.31325 13.268 6.74667C13.2666 6.70976 13.2727 6.67295 13.2862 6.63854C13.2996 6.60413 13.3199 6.57285 13.346 6.54667L14.002 5.89067C14.0199 5.87264 14.0427 5.86018 14.0675 5.85477C14.0924 5.84936 14.1182 5.85124 14.142 5.86018C14.1658 5.86912 14.1865 5.88474 14.2017 5.90517C14.2168 5.9256 14.2257 5.94997 14.2273 5.97534C14.3508 7.83616 14.3039 9.70437 14.0873 11.5567C13.93 12.9047 12.8473 13.9613 11.5053 14.1113C9.17556 14.3693 6.82443 14.3693 4.49467 14.1113C3.15333 13.9613 2.07 12.9047 1.91267 11.5567C1.63627 9.19361 1.63627 6.80639 1.91267 4.44334C2.07 3.09534 3.15267 2.03867 4.49467 1.88867C6.26291 1.69259 8.04448 1.64509 9.82067 1.74667C9.84608 1.74849 9.87045 1.75757 9.89087 1.77281C9.91129 1.78806 9.92692 1.80883 9.9359 1.83268C9.94488 1.85653 9.94683 1.88246 9.94153 1.90739C9.93624 1.93231 9.9239 1.9552 9.906 1.97334L9.244 2.63467C9.21807 2.6605 9.18713 2.68075 9.15307 2.69417C9.11902 2.70758 9.08258 2.71388 9.046 2.71267C7.56384 2.66229 6.07997 2.7191 4.606 2.88267C4.17529 2.93034 3.77323 3.12182 3.46477 3.42617C3.1563 3.73052 2.95945 4.12998 2.906 4.56C2.6387 6.84555 2.6387 9.15446 2.906 11.44C2.95945 11.87 3.1563 12.2695 3.46477 12.5738C3.77323 12.8782 4.17529 13.0697 4.606 13.1173C6.84267 13.3673 9.15733 13.3673 11.3947 13.1173C11.8254 13.0697 12.2274 12.8782 12.5359 12.5738C12.8444 12.2695 13.0406 11.87 13.094 11.44Z"
                  fill="#BDB841"
                />
              </svg>{" "}
            </td>
          </tr>



          <tr>
            <td>25-09-2023 </td>
            <td>Eastern Motors </td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M2.66667 10.6693V11.3333C2.66667 11.8638 2.87739 12.3725 3.25246 12.7475C3.62753 13.1226 4.13624 13.3333 4.66667 13.3333H11.3333C11.8638 13.3333 12.3725 13.1226 12.7476 12.7475C13.1226 12.3725 13.3333 11.8638 13.3333 11.3333V10.6667M8 3V10.3333M8 10.3333L10.3333 8M8 10.3333L5.66667 8"
                  stroke="#63C98E"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>{" "}
            </td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.3033 3.61067C14.3667 3.70681 14.3949 3.82186 14.3832 3.93639C14.3716 4.05093 14.3207 4.15793 14.2393 4.23934L8.11067 10.3673C8.04797 10.43 7.96974 10.4749 7.884 10.4973L5.33133 11.164C5.24695 11.186 5.15828 11.1856 5.07413 11.1627C4.98997 11.1399 4.91326 11.0954 4.8516 11.0337C4.78993 10.9721 4.74547 10.8954 4.72262 10.8112C4.69977 10.7271 4.69933 10.6384 4.72133 10.554L5.388 8.002C5.40746 7.9254 5.44417 7.85425 5.49533 7.794L11.6467 1.64667C11.7404 1.55304 11.8675 1.50044 12 1.50044C12.1325 1.50044 12.2596 1.55304 12.3533 1.64667L14.2393 3.532C14.2633 3.55601 14.2847 3.58236 14.3033 3.61067ZM13.1787 3.88534L12 2.70734L6.32133 8.386L5.90467 9.98134L7.5 9.56467L13.1787 3.88534Z"
                  fill="#BDB841"
                />
                <path
                  d="M13.094 11.44C13.2762 9.88264 13.3344 8.31325 13.268 6.74667C13.2666 6.70976 13.2727 6.67295 13.2862 6.63854C13.2996 6.60413 13.3199 6.57285 13.346 6.54667L14.002 5.89067C14.0199 5.87264 14.0427 5.86018 14.0675 5.85477C14.0924 5.84936 14.1182 5.85124 14.142 5.86018C14.1658 5.86912 14.1865 5.88474 14.2017 5.90517C14.2168 5.9256 14.2257 5.94997 14.2273 5.97534C14.3508 7.83616 14.3039 9.70437 14.0873 11.5567C13.93 12.9047 12.8473 13.9613 11.5053 14.1113C9.17556 14.3693 6.82443 14.3693 4.49467 14.1113C3.15333 13.9613 2.07 12.9047 1.91267 11.5567C1.63627 9.19361 1.63627 6.80639 1.91267 4.44334C2.07 3.09534 3.15267 2.03867 4.49467 1.88867C6.26291 1.69259 8.04448 1.64509 9.82067 1.74667C9.84608 1.74849 9.87045 1.75757 9.89087 1.77281C9.91129 1.78806 9.92692 1.80883 9.9359 1.83268C9.94488 1.85653 9.94683 1.88246 9.94153 1.90739C9.93624 1.93231 9.9239 1.9552 9.906 1.97334L9.244 2.63467C9.21807 2.6605 9.18713 2.68075 9.15307 2.69417C9.11902 2.70758 9.08258 2.71388 9.046 2.71267C7.56384 2.66229 6.07997 2.7191 4.606 2.88267C4.17529 2.93034 3.77323 3.12182 3.46477 3.42617C3.1563 3.73052 2.95945 4.12998 2.906 4.56C2.6387 6.84555 2.6387 9.15446 2.906 11.44C2.95945 11.87 3.1563 12.2695 3.46477 12.5738C3.77323 12.8782 4.17529 13.0697 4.606 13.1173C6.84267 13.3673 9.15733 13.3673 11.3947 13.1173C11.8254 13.0697 12.2274 12.8782 12.5359 12.5738C12.8444 12.2695 13.0406 11.87 13.094 11.44Z"
                  fill="#BDB841"
                />
              </svg>{" "}
            </td>
          </tr>



           <tr>
            <td>25-09-2023 </td>
            <td>Eastern Motors </td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M2.66667 10.6693V11.3333C2.66667 11.8638 2.87739 12.3725 3.25246 12.7475C3.62753 13.1226 4.13624 13.3333 4.66667 13.3333H11.3333C11.8638 13.3333 12.3725 13.1226 12.7476 12.7475C13.1226 12.3725 13.3333 11.8638 13.3333 11.3333V10.6667M8 3V10.3333M8 10.3333L10.3333 8M8 10.3333L5.66667 8"
                  stroke="#63C98E"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>{" "}
            </td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.3033 3.61067C14.3667 3.70681 14.3949 3.82186 14.3832 3.93639C14.3716 4.05093 14.3207 4.15793 14.2393 4.23934L8.11067 10.3673C8.04797 10.43 7.96974 10.4749 7.884 10.4973L5.33133 11.164C5.24695 11.186 5.15828 11.1856 5.07413 11.1627C4.98997 11.1399 4.91326 11.0954 4.8516 11.0337C4.78993 10.9721 4.74547 10.8954 4.72262 10.8112C4.69977 10.7271 4.69933 10.6384 4.72133 10.554L5.388 8.002C5.40746 7.9254 5.44417 7.85425 5.49533 7.794L11.6467 1.64667C11.7404 1.55304 11.8675 1.50044 12 1.50044C12.1325 1.50044 12.2596 1.55304 12.3533 1.64667L14.2393 3.532C14.2633 3.55601 14.2847 3.58236 14.3033 3.61067ZM13.1787 3.88534L12 2.70734L6.32133 8.386L5.90467 9.98134L7.5 9.56467L13.1787 3.88534Z"
                  fill="#BDB841"
                />
                <path
                  d="M13.094 11.44C13.2762 9.88264 13.3344 8.31325 13.268 6.74667C13.2666 6.70976 13.2727 6.67295 13.2862 6.63854C13.2996 6.60413 13.3199 6.57285 13.346 6.54667L14.002 5.89067C14.0199 5.87264 14.0427 5.86018 14.0675 5.85477C14.0924 5.84936 14.1182 5.85124 14.142 5.86018C14.1658 5.86912 14.1865 5.88474 14.2017 5.90517C14.2168 5.9256 14.2257 5.94997 14.2273 5.97534C14.3508 7.83616 14.3039 9.70437 14.0873 11.5567C13.93 12.9047 12.8473 13.9613 11.5053 14.1113C9.17556 14.3693 6.82443 14.3693 4.49467 14.1113C3.15333 13.9613 2.07 12.9047 1.91267 11.5567C1.63627 9.19361 1.63627 6.80639 1.91267 4.44334C2.07 3.09534 3.15267 2.03867 4.49467 1.88867C6.26291 1.69259 8.04448 1.64509 9.82067 1.74667C9.84608 1.74849 9.87045 1.75757 9.89087 1.77281C9.91129 1.78806 9.92692 1.80883 9.9359 1.83268C9.94488 1.85653 9.94683 1.88246 9.94153 1.90739C9.93624 1.93231 9.9239 1.9552 9.906 1.97334L9.244 2.63467C9.21807 2.6605 9.18713 2.68075 9.15307 2.69417C9.11902 2.70758 9.08258 2.71388 9.046 2.71267C7.56384 2.66229 6.07997 2.7191 4.606 2.88267C4.17529 2.93034 3.77323 3.12182 3.46477 3.42617C3.1563 3.73052 2.95945 4.12998 2.906 4.56C2.6387 6.84555 2.6387 9.15446 2.906 11.44C2.95945 11.87 3.1563 12.2695 3.46477 12.5738C3.77323 12.8782 4.17529 13.0697 4.606 13.1173C6.84267 13.3673 9.15733 13.3673 11.3947 13.1173C11.8254 13.0697 12.2274 12.8782 12.5359 12.5738C12.8444 12.2695 13.0406 11.87 13.094 11.44Z"
                  fill="#BDB841"
                />
              </svg>{" "}
            </td>
          </tr>



         <tr>
            <td>25-09-2023 </td>
            <td>Eastern Motors </td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M2.66667 10.6693V11.3333C2.66667 11.8638 2.87739 12.3725 3.25246 12.7475C3.62753 13.1226 4.13624 13.3333 4.66667 13.3333H11.3333C11.8638 13.3333 12.3725 13.1226 12.7476 12.7475C13.1226 12.3725 13.3333 11.8638 13.3333 11.3333V10.6667M8 3V10.3333M8 10.3333L10.3333 8M8 10.3333L5.66667 8"
                  stroke="#63C98E"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>{" "}
            </td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.3033 3.61067C14.3667 3.70681 14.3949 3.82186 14.3832 3.93639C14.3716 4.05093 14.3207 4.15793 14.2393 4.23934L8.11067 10.3673C8.04797 10.43 7.96974 10.4749 7.884 10.4973L5.33133 11.164C5.24695 11.186 5.15828 11.1856 5.07413 11.1627C4.98997 11.1399 4.91326 11.0954 4.8516 11.0337C4.78993 10.9721 4.74547 10.8954 4.72262 10.8112C4.69977 10.7271 4.69933 10.6384 4.72133 10.554L5.388 8.002C5.40746 7.9254 5.44417 7.85425 5.49533 7.794L11.6467 1.64667C11.7404 1.55304 11.8675 1.50044 12 1.50044C12.1325 1.50044 12.2596 1.55304 12.3533 1.64667L14.2393 3.532C14.2633 3.55601 14.2847 3.58236 14.3033 3.61067ZM13.1787 3.88534L12 2.70734L6.32133 8.386L5.90467 9.98134L7.5 9.56467L13.1787 3.88534Z"
                  fill="#BDB841"
                />
                <path
                  d="M13.094 11.44C13.2762 9.88264 13.3344 8.31325 13.268 6.74667C13.2666 6.70976 13.2727 6.67295 13.2862 6.63854C13.2996 6.60413 13.3199 6.57285 13.346 6.54667L14.002 5.89067C14.0199 5.87264 14.0427 5.86018 14.0675 5.85477C14.0924 5.84936 14.1182 5.85124 14.142 5.86018C14.1658 5.86912 14.1865 5.88474 14.2017 5.90517C14.2168 5.9256 14.2257 5.94997 14.2273 5.97534C14.3508 7.83616 14.3039 9.70437 14.0873 11.5567C13.93 12.9047 12.8473 13.9613 11.5053 14.1113C9.17556 14.3693 6.82443 14.3693 4.49467 14.1113C3.15333 13.9613 2.07 12.9047 1.91267 11.5567C1.63627 9.19361 1.63627 6.80639 1.91267 4.44334C2.07 3.09534 3.15267 2.03867 4.49467 1.88867C6.26291 1.69259 8.04448 1.64509 9.82067 1.74667C9.84608 1.74849 9.87045 1.75757 9.89087 1.77281C9.91129 1.78806 9.92692 1.80883 9.9359 1.83268C9.94488 1.85653 9.94683 1.88246 9.94153 1.90739C9.93624 1.93231 9.9239 1.9552 9.906 1.97334L9.244 2.63467C9.21807 2.6605 9.18713 2.68075 9.15307 2.69417C9.11902 2.70758 9.08258 2.71388 9.046 2.71267C7.56384 2.66229 6.07997 2.7191 4.606 2.88267C4.17529 2.93034 3.77323 3.12182 3.46477 3.42617C3.1563 3.73052 2.95945 4.12998 2.906 4.56C2.6387 6.84555 2.6387 9.15446 2.906 11.44C2.95945 11.87 3.1563 12.2695 3.46477 12.5738C3.77323 12.8782 4.17529 13.0697 4.606 13.1173C6.84267 13.3673 9.15733 13.3673 11.3947 13.1173C11.8254 13.0697 12.2274 12.8782 12.5359 12.5738C12.8444 12.2695 13.0406 11.87 13.094 11.44Z"
                  fill="#BDB841"
                />
              </svg>{" "}
            </td>
          </tr>


 <tr>
            <td>25-09-2023 </td>
            <td>Eastern Motors </td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M2.66667 10.6693V11.3333C2.66667 11.8638 2.87739 12.3725 3.25246 12.7475C3.62753 13.1226 4.13624 13.3333 4.66667 13.3333H11.3333C11.8638 13.3333 12.3725 13.1226 12.7476 12.7475C13.1226 12.3725 13.3333 11.8638 13.3333 11.3333V10.6667M8 3V10.3333M8 10.3333L10.3333 8M8 10.3333L5.66667 8"
                  stroke="#63C98E"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>{" "}
            </td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.3033 3.61067C14.3667 3.70681 14.3949 3.82186 14.3832 3.93639C14.3716 4.05093 14.3207 4.15793 14.2393 4.23934L8.11067 10.3673C8.04797 10.43 7.96974 10.4749 7.884 10.4973L5.33133 11.164C5.24695 11.186 5.15828 11.1856 5.07413 11.1627C4.98997 11.1399 4.91326 11.0954 4.8516 11.0337C4.78993 10.9721 4.74547 10.8954 4.72262 10.8112C4.69977 10.7271 4.69933 10.6384 4.72133 10.554L5.388 8.002C5.40746 7.9254 5.44417 7.85425 5.49533 7.794L11.6467 1.64667C11.7404 1.55304 11.8675 1.50044 12 1.50044C12.1325 1.50044 12.2596 1.55304 12.3533 1.64667L14.2393 3.532C14.2633 3.55601 14.2847 3.58236 14.3033 3.61067ZM13.1787 3.88534L12 2.70734L6.32133 8.386L5.90467 9.98134L7.5 9.56467L13.1787 3.88534Z"
                  fill="#BDB841"
                />
                <path
                  d="M13.094 11.44C13.2762 9.88264 13.3344 8.31325 13.268 6.74667C13.2666 6.70976 13.2727 6.67295 13.2862 6.63854C13.2996 6.60413 13.3199 6.57285 13.346 6.54667L14.002 5.89067C14.0199 5.87264 14.0427 5.86018 14.0675 5.85477C14.0924 5.84936 14.1182 5.85124 14.142 5.86018C14.1658 5.86912 14.1865 5.88474 14.2017 5.90517C14.2168 5.9256 14.2257 5.94997 14.2273 5.97534C14.3508 7.83616 14.3039 9.70437 14.0873 11.5567C13.93 12.9047 12.8473 13.9613 11.5053 14.1113C9.17556 14.3693 6.82443 14.3693 4.49467 14.1113C3.15333 13.9613 2.07 12.9047 1.91267 11.5567C1.63627 9.19361 1.63627 6.80639 1.91267 4.44334C2.07 3.09534 3.15267 2.03867 4.49467 1.88867C6.26291 1.69259 8.04448 1.64509 9.82067 1.74667C9.84608 1.74849 9.87045 1.75757 9.89087 1.77281C9.91129 1.78806 9.92692 1.80883 9.9359 1.83268C9.94488 1.85653 9.94683 1.88246 9.94153 1.90739C9.93624 1.93231 9.9239 1.9552 9.906 1.97334L9.244 2.63467C9.21807 2.6605 9.18713 2.68075 9.15307 2.69417C9.11902 2.70758 9.08258 2.71388 9.046 2.71267C7.56384 2.66229 6.07997 2.7191 4.606 2.88267C4.17529 2.93034 3.77323 3.12182 3.46477 3.42617C3.1563 3.73052 2.95945 4.12998 2.906 4.56C2.6387 6.84555 2.6387 9.15446 2.906 11.44C2.95945 11.87 3.1563 12.2695 3.46477 12.5738C3.77323 12.8782 4.17529 13.0697 4.606 13.1173C6.84267 13.3673 9.15733 13.3673 11.3947 13.1173C11.8254 13.0697 12.2274 12.8782 12.5359 12.5738C12.8444 12.2695 13.0406 11.87 13.094 11.44Z"
                  fill="#BDB841"
                />
              </svg>{" "}
            </td>
          </tr>


 <tr>
            <td>25-09-2023 </td>
            <td>Eastern Motors </td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M2.66667 10.6693V11.3333C2.66667 11.8638 2.87739 12.3725 3.25246 12.7475C3.62753 13.1226 4.13624 13.3333 4.66667 13.3333H11.3333C11.8638 13.3333 12.3725 13.1226 12.7476 12.7475C13.1226 12.3725 13.3333 11.8638 13.3333 11.3333V10.6667M8 3V10.3333M8 10.3333L10.3333 8M8 10.3333L5.66667 8"
                  stroke="#63C98E"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>{" "}
            </td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.3033 3.61067C14.3667 3.70681 14.3949 3.82186 14.3832 3.93639C14.3716 4.05093 14.3207 4.15793 14.2393 4.23934L8.11067 10.3673C8.04797 10.43 7.96974 10.4749 7.884 10.4973L5.33133 11.164C5.24695 11.186 5.15828 11.1856 5.07413 11.1627C4.98997 11.1399 4.91326 11.0954 4.8516 11.0337C4.78993 10.9721 4.74547 10.8954 4.72262 10.8112C4.69977 10.7271 4.69933 10.6384 4.72133 10.554L5.388 8.002C5.40746 7.9254 5.44417 7.85425 5.49533 7.794L11.6467 1.64667C11.7404 1.55304 11.8675 1.50044 12 1.50044C12.1325 1.50044 12.2596 1.55304 12.3533 1.64667L14.2393 3.532C14.2633 3.55601 14.2847 3.58236 14.3033 3.61067ZM13.1787 3.88534L12 2.70734L6.32133 8.386L5.90467 9.98134L7.5 9.56467L13.1787 3.88534Z"
                  fill="#BDB841"
                />
                <path
                  d="M13.094 11.44C13.2762 9.88264 13.3344 8.31325 13.268 6.74667C13.2666 6.70976 13.2727 6.67295 13.2862 6.63854C13.2996 6.60413 13.3199 6.57285 13.346 6.54667L14.002 5.89067C14.0199 5.87264 14.0427 5.86018 14.0675 5.85477C14.0924 5.84936 14.1182 5.85124 14.142 5.86018C14.1658 5.86912 14.1865 5.88474 14.2017 5.90517C14.2168 5.9256 14.2257 5.94997 14.2273 5.97534C14.3508 7.83616 14.3039 9.70437 14.0873 11.5567C13.93 12.9047 12.8473 13.9613 11.5053 14.1113C9.17556 14.3693 6.82443 14.3693 4.49467 14.1113C3.15333 13.9613 2.07 12.9047 1.91267 11.5567C1.63627 9.19361 1.63627 6.80639 1.91267 4.44334C2.07 3.09534 3.15267 2.03867 4.49467 1.88867C6.26291 1.69259 8.04448 1.64509 9.82067 1.74667C9.84608 1.74849 9.87045 1.75757 9.89087 1.77281C9.91129 1.78806 9.92692 1.80883 9.9359 1.83268C9.94488 1.85653 9.94683 1.88246 9.94153 1.90739C9.93624 1.93231 9.9239 1.9552 9.906 1.97334L9.244 2.63467C9.21807 2.6605 9.18713 2.68075 9.15307 2.69417C9.11902 2.70758 9.08258 2.71388 9.046 2.71267C7.56384 2.66229 6.07997 2.7191 4.606 2.88267C4.17529 2.93034 3.77323 3.12182 3.46477 3.42617C3.1563 3.73052 2.95945 4.12998 2.906 4.56C2.6387 6.84555 2.6387 9.15446 2.906 11.44C2.95945 11.87 3.1563 12.2695 3.46477 12.5738C3.77323 12.8782 4.17529 13.0697 4.606 13.1173C6.84267 13.3673 9.15733 13.3673 11.3947 13.1173C11.8254 13.0697 12.2274 12.8782 12.5359 12.5738C12.8444 12.2695 13.0406 11.87 13.094 11.44Z"
                  fill="#BDB841"
                />
              </svg>{" "}
            </td>
          </tr>



           <tr>
            <td>25-09-2023 </td>
            <td>Eastern Motors </td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M2.66667 10.6693V11.3333C2.66667 11.8638 2.87739 12.3725 3.25246 12.7475C3.62753 13.1226 4.13624 13.3333 4.66667 13.3333H11.3333C11.8638 13.3333 12.3725 13.1226 12.7476 12.7475C13.1226 12.3725 13.3333 11.8638 13.3333 11.3333V10.6667M8 3V10.3333M8 10.3333L10.3333 8M8 10.3333L5.66667 8"
                  stroke="#63C98E"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>{" "}
            </td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.3033 3.61067C14.3667 3.70681 14.3949 3.82186 14.3832 3.93639C14.3716 4.05093 14.3207 4.15793 14.2393 4.23934L8.11067 10.3673C8.04797 10.43 7.96974 10.4749 7.884 10.4973L5.33133 11.164C5.24695 11.186 5.15828 11.1856 5.07413 11.1627C4.98997 11.1399 4.91326 11.0954 4.8516 11.0337C4.78993 10.9721 4.74547 10.8954 4.72262 10.8112C4.69977 10.7271 4.69933 10.6384 4.72133 10.554L5.388 8.002C5.40746 7.9254 5.44417 7.85425 5.49533 7.794L11.6467 1.64667C11.7404 1.55304 11.8675 1.50044 12 1.50044C12.1325 1.50044 12.2596 1.55304 12.3533 1.64667L14.2393 3.532C14.2633 3.55601 14.2847 3.58236 14.3033 3.61067ZM13.1787 3.88534L12 2.70734L6.32133 8.386L5.90467 9.98134L7.5 9.56467L13.1787 3.88534Z"
                  fill="#BDB841"
                />
                <path
                  d="M13.094 11.44C13.2762 9.88264 13.3344 8.31325 13.268 6.74667C13.2666 6.70976 13.2727 6.67295 13.2862 6.63854C13.2996 6.60413 13.3199 6.57285 13.346 6.54667L14.002 5.89067C14.0199 5.87264 14.0427 5.86018 14.0675 5.85477C14.0924 5.84936 14.1182 5.85124 14.142 5.86018C14.1658 5.86912 14.1865 5.88474 14.2017 5.90517C14.2168 5.9256 14.2257 5.94997 14.2273 5.97534C14.3508 7.83616 14.3039 9.70437 14.0873 11.5567C13.93 12.9047 12.8473 13.9613 11.5053 14.1113C9.17556 14.3693 6.82443 14.3693 4.49467 14.1113C3.15333 13.9613 2.07 12.9047 1.91267 11.5567C1.63627 9.19361 1.63627 6.80639 1.91267 4.44334C2.07 3.09534 3.15267 2.03867 4.49467 1.88867C6.26291 1.69259 8.04448 1.64509 9.82067 1.74667C9.84608 1.74849 9.87045 1.75757 9.89087 1.77281C9.91129 1.78806 9.92692 1.80883 9.9359 1.83268C9.94488 1.85653 9.94683 1.88246 9.94153 1.90739C9.93624 1.93231 9.9239 1.9552 9.906 1.97334L9.244 2.63467C9.21807 2.6605 9.18713 2.68075 9.15307 2.69417C9.11902 2.70758 9.08258 2.71388 9.046 2.71267C7.56384 2.66229 6.07997 2.7191 4.606 2.88267C4.17529 2.93034 3.77323 3.12182 3.46477 3.42617C3.1563 3.73052 2.95945 4.12998 2.906 4.56C2.6387 6.84555 2.6387 9.15446 2.906 11.44C2.95945 11.87 3.1563 12.2695 3.46477 12.5738C3.77323 12.8782 4.17529 13.0697 4.606 13.1173C6.84267 13.3673 9.15733 13.3673 11.3947 13.1173C11.8254 13.0697 12.2274 12.8782 12.5359 12.5738C12.8444 12.2695 13.0406 11.87 13.094 11.44Z"
                  fill="#BDB841"
                />
              </svg>{" "}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
