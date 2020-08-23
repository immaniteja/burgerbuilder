import React from 'react';
import Auxilary from '../../hoc/Auxilary'

const Layout = props => {
    return (
        <Auxilary>
            <div>Toolbar, SideNav, Backdrop</div>
            <main>
                {props.children}
            </main>
        </Auxilary>
    );
}

export default Layout;