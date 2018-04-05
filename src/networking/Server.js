import React, { Component } from 'react';
import { } from 'react-native';

const apiGetBanner = 'http://118.68.168.255:8080/webservice/banner/getBanner';
async function getBanner() {
    try {
        let response = await fetch(apiGetBanner, {
            method: 'GET',
            headers: {
                'Authorization': 'muasamcong',
                'Content-Type': 'application/json',
            }
        });
        let responseJson = await response.json();
        return responseJson.data;
    } catch (error) {

    }
}

export { getBanner };
