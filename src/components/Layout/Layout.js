import React from 'react';

import Reactaux from '../../hoc/Reactaux';
import './Layout.css';

const layout = ( props ) => (
    <Reactaux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className="Content">
            {props.children}
        </main>
    </Reactaux>
);

export default layout;