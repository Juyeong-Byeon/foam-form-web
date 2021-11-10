enum ServerPath {
  Logo = `/resource/logo.png`,
}

namespace ServerPath {
  export function getFullPath(path: ServerPath) {
    return process.env.SERVER + path;
  }
}

export default ServerPath;
