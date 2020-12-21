import React from 'react';
import { Card, Button } from 'antd';
import { getBaseInfo } from '@/api';

const RequestAxios = () => {

  const handleTestApi = () => {
    getBaseInfo('/', { user: '11111' }).then(data => {
      console.log(data);
    });
  }

  return <Card>
    <Button type={'primary'} onClick={handleTestApi}>test Api</Button>
  </Card>
}

export default RequestAxios;