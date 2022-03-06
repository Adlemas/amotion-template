export default function Container(props: any) {
  return (
    <div style={{
      display: 'flex',
      flex: 1,
      flexWrap: 'wrap'
    }}>
      {props.children}
    </div>
  )
}
