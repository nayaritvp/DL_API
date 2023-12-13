import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

const MiApi = ({ setFeriados, feriadosOtro, setFeriadosOtro }) => {
  useEffect(() => {
    fetch('https://api.victorsanmartin.com/feriados/en.json')
      .then(data => data.json())
      .then(f => {
        setFeriados(f.data);
        setFeriadosOtro(f.data);
      });
  }, []);

  return (
    <div>
      {feriadosOtro.map(f => (
        <Card style={{ width: '18rem' }} key={f.title}>
          <Card.Body>
            <Card.Title>{f.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{f.type}</Card.Subtitle>
            <Card.Text>
              {f.date} - {f.title}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default MiApi;
