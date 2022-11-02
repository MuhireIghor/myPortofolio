import React from 'react';
import {Row,Col} from 'react-bootstrap';
import { StoreItem } from '../components/StoreItem';
import StoreItems from '../store/items.json';
export function Store(){
return (
       <>
       <h1>Store</h1>
       <Row md={3} xs={1} lg={2} className="g-3">
    {StoreItems.map((item)=>(
        <Col key={item.id}>
    <StoreItem {...item} />
        </Col>
    ))}
       </Row>
        

       </>
    )
}