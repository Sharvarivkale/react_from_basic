function Text({className,displaytext}){
  return <div>
    <input type="text" className={className} value={displaytext} readOnly/>
  </div>
}

export default Text;