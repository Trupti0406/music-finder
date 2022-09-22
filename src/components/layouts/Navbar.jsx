import React from 'react';

const Navbar = () => {
    return (
      <nav className="navbar navbar-dark bg-light mb-5">
        <span className="navbar-brand mb-0 h1 mx-auto">
          <img
            src="https://s3.amazonaws.com/enterprise-multitenant.3scale.net.3scale.net/musixmatch/2016/12/05/mxm-logo-0884efdf5414f3d0.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIRYLTWBQ37ZNGBZA%2F20220922%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220922T121520Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=e7dfbd4f76f082b1be0edd6607916675ec18d2d0731dd735b6a3ba9fde7f22a7"
            alt=""
          />
        </span>
      </nav>
    );
}

export default Navbar;
