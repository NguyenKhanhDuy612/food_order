export default function Button({children, textButton, className, ...props}){
	let cssClass = textButton ? 'text-button' : 'button';
	cssClass += ' ' + (className || '') ;
	return(
		<button className={cssClass} {...props}>{children}</button>
	)
}