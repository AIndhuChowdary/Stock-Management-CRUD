import React, { useEffect, useState } from 'react';
import { Table, Card, Image, Button, } from 'react-bootstrap';
import FirestoreService from '../utils/services/FirestoreService';
function Menu(props) {
    const [menuItems, setMenuItems] = useState([]);
    useEffect(() => {
        FirestoreService.getAllMenuItems().then((response) => {
            setMenuItems(response._delegate._snapshot.docChanges);
        }).catch((e) => {
            alert("Error occured while fetching the menu item. " + e);
        })
    }, [])
    return (
        <>
            <Card style={{ margin: 24 }}>
                <Card.Header className="d-flex justify-content-between align-items-center">
                    <div className="align-items-center" style={{ marginRight: 8 }}>
                        <Image src={'https://static.wixstatic.com/media/05d5b9_f3960b4ed1ba4d60886fa2eb6ea88688~mv2.jpg/v1/fill/w_144,h_144,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/B.jpg'} style={{ width: 90 }} />
                        <p style={{ marginTop: 8, fontSize: 12, color: '#A1A1A1' }}>Shensu AI Technologies Pvt Ltd (Brand Name: BlackBox-AI)</p>
                    </div>
                    <a href="mailto:info@blackbox-ai.org?body=My custom mail body"><Button style={{ backgroundColor: '#BD2B2B', borderWidth: 0, }}>Get in touch</Button></a>
                </Card.Header>
                <Card.Body>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Name</th>
                                <th>Category</th>
                                <th>Description</th>
                                <th>Price (USD)</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(menuItems) && (menuItems.map((menuItem, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{menuItem.doc.data.value.mapValue.fields.itemName.stringValue}</td>
                                    <td>{menuItem.doc.data.value.mapValue.fields.itemCategory.stringValue}</td>
                                    <td>{menuItem.doc.data.value.mapValue.fields.itemDescription.stringValue}</td>
                                    <td>{menuItem.doc.data.value.mapValue.fields.itemPrice.doubleValue ? menuItem.doc.data.value.mapValue.fields.itemPrice.doubleValue : menuItem.doc.data.value.mapValue.fields.itemPrice.integerValue}</td>
                                    <td>{menuItem.doc.data.value.mapValue.fields.itemQuantity.doubleValue ? menuItem.doc.data.value.mapValue.fields.itemQuantity.doubleValue : menuItem.doc.data.value.mapValue.fields.itemQuantity.integerValue}</td>

                                </tr>
                            )))}</tbody>
                    </Table>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center">
                    <p style={{ marginTop: 8, fontSize: 12, color: '#A1A1A1' }}>© 2023 BlackBox-AI</p>
                    <p style={{ marginTop: 8, fontSize: 12, color: '#A1A1A1' }}><a href="/login">Admin Login</a> • <a href="#">Privacy Policy</a> • <a href="#">Directions</a> • <a href="https://www.blackbox-ai.org/">Contact Us</a></p>
                </Card.Footer>
            </Card >
        </>
    );
}
export default Menu;