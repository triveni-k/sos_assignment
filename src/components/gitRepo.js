import { Grid, Input, Card } from "semantic-ui-react";
import React, { useState } from 'react';
import './style.css'

const GitRepo = () => {

  const items = [
    {
      header: 'Project Report - April',
      username: 'triveni',
      description:
        'Bring to the table win-win survival strategies to ensure proactive domination.',
      meta: 'ROI: 30%',
    },
    {
      header: 'Project Report - May',
      username: 'shalini',
      description:
        'Bring to the table win-win survival strategies to ensure proactive domination.',
      meta: 'ROI: 34%',
    },
    {
      header: 'Project Report - May',
      username: 'Aish',
      description:
        'Bring to the table win-win survival strategies to ensure proactive domination.',
      meta: 'ROI: 34%',
    },
    {
      header: 'Project Report - May',
      username: 'Sumeera',
      description:
        'Bring to the table win-win survival strategies to ensure proactive domination.',
      meta: 'ROI: 34%',
    },
    {
      header: 'Project Report - May',
      username: 'tejashree',
      description:
        'Bring to the table win-win survival strategies to ensure proactive domination.',
      meta: 'ROI: 34%',
    },
    {
      header: 'Project Report - May',
      username: 'nalini',
      description:
        'Bring to the table win-win survival strategies to ensure proactive domination.',
      meta: 'ROI: 34%',
    },
    {
      header: 'Project Report - May',
      username: 'maya',
      description:
        'Bring to the table win-win survival strategies to ensure proactive domination.',
      meta: 'ROI: 34%',
    },
    {
      header: 'Project Report - May',
      username: 'mohini',
      description:
        'Bring to the table win-win survival strategies to ensure proactive domination.',
      meta: 'ROI: 34%',
    },
    {
      header: 'Project Report - May',
      username: 'triveni',
      description:
        'Bring to the table win-win survival strategies to ensure proactive domination.',
      meta: 'ROI: 34%',
    },
    {
      header: 'Project Report - May',
      username: 'pavetra',
      description:
        'Bring to the table win-win survival strategies to ensure proactive domination.',
      meta: 'ROI: 34%',
    },
  ]

  const [search, setSearch] = useState('');

  const reg = new RegExp(search, 'i');
  return (<Grid textAlign='center' style={{ height: '100vh', marginTop: '1rem' }} >
    <Grid.Column className='search-column'>
      <Input icon='search'
        labelPosition='right'
        placeholder='Search'
        className='search-input'
        value={search}
        onChange={(e) => setSearch(e.target.value)} />
    </Grid.Column>
    <Grid.Row>
      <Grid.Column style={{ height: 'fit-content' }}>
        <Card.Group centered>
          {items.map(card => reg.test(card.username) ? (<Card>
            <Card.Content style = {{paddingBottom: '0px'}}>
              <Card.Header>{card.header}</Card.Header>
              <Card.Description>
                {card.description}
                <div style={{ textAlign: 'justify', marginBottom: '0.5rem' }}><small>Update: 10 days ago</small>
                  <small style={{ marginLeft: '40px' }}> <strong>Username: {card.username}</strong></small></div>
              </Card.Description>
            </Card.Content>
          </Card>) : null)
          }
        </Card.Group>
      </Grid.Column>
    </Grid.Row>
  </Grid>)
}

export default GitRepo;