import React from 'react'

export default function AboutContent() {
	return (
		<>
			<h1>Lorem ipsum dolor sit amet consectetuer adipiscing elit</h1>

			<p>
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
				ligula eget dolor. Aenean massa <strong>strong</strong>. Cum sociis
				natoque penatibus et magnis dis parturient montes, nascetur ridiculus
				mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
				sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
				aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet
				a, venenatis vitae, justo. Nullam dictum felis eu pede{' '}
				<a href="#">link</a> mollis pretium. Integer tincidunt. Cras dapibus.
				Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean
				leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
				lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
				viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
				Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
			</p>

			<h1>Lorem ipsum dolor sit amet consectetuer adipiscing elit</h1>

			<h2>Aenean commodo ligula eget dolor aenean massa</h2>

			<p>
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
				ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
				dis parturient montes, nascetur ridiculus mus. Donec quam felis,
				ultricies nec, pellentesque eu, pretium quis, sem.
			</p>

			<h2>Aenean commodo ligula eget dolor aenean massa</h2>

			<p>
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
				ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
				dis parturient montes, nascetur ridiculus mus. Donec quam felis,
				ultricies nec, pellentesque eu, pretium quis, sem.
			</p>

			<h3>Lorem ipsum dolor sit amet.</h3>

			<ul>
				<li>Lorem ipsum dolor sit amet consectetuer.</li>
				<li>Aenean commodo ligula eget dolor.</li>
				<li>Aenean massa cum sociis natoque penatibus.</li>
				<li>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
					commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
					et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
					felis, ultricies nec, pellentesque eu, pretium quis, sem.
				</li>
			</ul>

			<p>
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
				ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
				dis parturient montes, nascetur ridiculus mus. Donec quam felis,
				ultricies nec, pellentesque eu, pretium quis, sem.
			</p>

			<form action="#" method="post">
				<fieldset>
					<label htmlFor="name">Name:</label>
					<input type="text" id="name" placeholder="Enter your full name" />

					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						placeholder="Enter your email address"
					/>

					<label htmlFor="message">Message:</label>
					<textarea id="message" placeholder="What's on your mind?"></textarea>

					<input type="submit" value="Send message" />
				</fieldset>
			</form>

			<p>
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
				ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
				dis parturient montes, nascetur ridiculus mus. Donec quam felis,
				ultricies nec, pellentesque eu, pretium quis, sem.
			</p>

			<table className="data">
				<tr>
					<th>Entry Header 1</th>
					<th>Entry Header 2</th>
					<th>Entry Header 3</th>
					<th>Entry Header 4</th>
				</tr>
				<tr>
					<td>Entry First Line 1</td>
					<td>Entry First Line 2</td>
					<td>Entry First Line 3</td>
					<td>Entry First Line 4</td>
				</tr>
				<tr>
					<td>Entry Line 1</td>
					<td>Entry Line 2</td>
					<td>Entry Line 3</td>
					<td>Entry Line 4</td>
				</tr>
				<tr>
					<td>Entry Last Line 1</td>
					<td>Entry Last Line 2</td>
					<td>Entry Last Line 3</td>
					<td>Entry Last Line 4</td>
				</tr>
			</table>

			<p>
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
				ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
				dis parturient montes, nascetur ridiculus mus. Donec quam felis,
				ultricies nec, pellentesque eu, pretium quis, sem.
			</p>
		</>
	)
}
