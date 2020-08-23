import React, { Component } from 'react'
import data from '../data';

export default class Products extends Component {
    render() {
        return (
            <div>
                <h2>สินค้าทั่งหมด</h2>
                {
                    data.product.map(item=>
                    <div>
                         {item.name}
                          ราคา {item.price} บาท
                          คงเหลือ {item.stork} ชิ้น
                    </div> 
                    )
                }
            </div>
        )
    }
}
