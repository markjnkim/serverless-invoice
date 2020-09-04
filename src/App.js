import React, { useState, useEffect } from 'react';
// import { useEffect, useState } from 'react'
import { Table, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown, faThumbsUp, faImage, faMoneyCheckAlt, faSearchDollar } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [invoices, setInvoices] = useState([]);
}
   const state = {
    invoice: [
      {
        "id": "100",
        "Vendor": "Hankook",
        "Amount": "$18,000",
        "invoice": "1123",
        "Date": "08/21/2019"
      },
      {
        "id": "200",
        "Vendor": "Hankook",
        "Amount": "$18,000",
        "invoice": "1123",
        "Date": "08/21/2019"
      },
      {
        "id": "300",
        "Vendor": "Hankook",
        "Amount": "$18,000",
        "invoice": "1123",
        "Date": "08/21/2019"
      }
    ]
  }

  const remove = (id) => {
    console.log(id);
    let updateedInvoices = [...this.state.invoices].filter(i => i.id !== id)
    setInvoices(updateedInvoices);
  }

  useEffect( async () => {
    const response = await fetch("https://r83gdnbzr7.execute-api.us-east-2.amazonaws.com/dev");
    const body = await response.json();
    setInvoices(body);
    console.log(invoices);
  }, [invoices]);
   
    return (
      <>
      {isLoading && <div>Loading...</div>}
      <div className="container border border-secondary rouded center">
        <div className="row">
          <div className="col-12">
            <h4>Pending Invoices - The GibiByte Company</h4>
          </div>
        </div>
        <div className="row">
          <div className=".col-xs-12 center text-center">
            <Table dark responsive striped bordered hover>
              <thead>
                <tr>
                  <th >Vendor</th>
                  <th>Amount</th>
                  <th>Invoice #</th>
                  <th>Date</th>
                  <th colSpan="4">Actions</th>
                  <th>Image</th>
                </tr>
              </thead>
              <tbody>
                {!invoices.length ? <td colSpan="9">All caught up!</td> : 
      invoices.map(invoice =>
        <tr key={invoice.id}>
          <td>{invoice.Vendor}</td>
          <td>{invoice.Amount}</td>
          <td>{invoice.invoice}</td>
          <td>{invoice.Date}</td>

          <td><Button className="btn btn-lg btn-success" onClick={() => this.remove(invoice.id)} > <FontAwesomeIcon icon={faThumbsUp} /> OK </Button></td>
          <td><Button className="btn btn-lg btn-danger" onClick={() => this.remove(invoice.id)} > <FontAwesomeIcon icon={faThumbsDown} /> NOK </Button></td>
          <td><Button className="btn btn-lg btn-info" onClick={() => this.remove(invoice.id)} > <FontAwesomeIcon icon={faMoneyCheckAlt} /> 50% </Button></td>
          <td><Button className="btn btn-lg btn-warning" onClick={() => this.remove(invoice.id)} ><FontAwesomeIcon icon={faSearchDollar} /> ?? </Button></td>
          <td><Button className="btn btn-lg btn-info" onClick={() => this.remove(invoice.id)} > <FontAwesomeIcon icon={faImage} /> Image </Button></td>
        </tr>}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
      </>
    );

export default App;
