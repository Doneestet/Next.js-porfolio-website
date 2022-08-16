const me = {
	siteName: 'Red Links',
	avatar: '/avatar.jpeg',
	description:
		'<p>My name is Dmitry, I decided to get into web development. At the moment my experience in programming is 8 months. </p>' +
		'<p>Like everyone, I started by learning of html, css, js. Then there was a need to learn React to develop an educational project.</p>' +
		'<p>The main mission is to learn how to create cool products that will help people and change the world.</p>'
}

export default function handler(req, res) {
	res.status(200).json(me)
}
