"use client";
import React, { useEffect, useState } from 'react';
import xmlJs from 'xml-js';
const XMLDisplay = () => {
  const [xmlData, setXmlData] = useState(null);
  
  useEffect(() => {
    fetch('/data.xml') // Replace with the URL or path to your XML data
      .then((response) => response.text())
      .then((xmlText) => {
        const jsonData = xmlJs.xml2json(xmlText, { compact: true, nativeType: false, textFn: removeJsonTextAttribute, ignoreAttributes: true, spaces: 1 });
        setXmlData(JSON.parse(jsonData));
      })
      .catch((error) => {
        console.error('Error fetching XML data:', error);
      });
  }, []);

  return (
    <div>
      {xmlData ? (
        <pre>{JSON.stringify(xmlData, null, 4)}</pre>
      ) : (
        <p>Loading XML data...</p>
      )}
    </div>
  );
};

export default XMLDisplay;
