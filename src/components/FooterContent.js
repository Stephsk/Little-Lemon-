import RestaurantPic from "./RestaurantPic";

function FooterContent() {
    return (
      
    <div class="rowsFooter">
      <div class="columnsFooter">
      <RestaurantPic />
      </div>
    <div class="columnsFooter">
<h3>Doormat</h3>
<ul>
    <li>Home</li>
    <li>About Us</li>
    <li>Menu</li>
    <li>Reservations</li>
    <li>Order Online</li>
    <li>Login</li>
</ul>
</div>

    <div class="columnsFooter">
      <h3>Contact</h3>
              <ul>
          <li>Address</li>
          <li>Phone Number</li>
          <li>Email</li>
        </ul>
</div>

    <div class="columnsFooter">
      <h3>Social Media Links</h3>
        <ul>
          <li>Address</li>
          <li>Phone Number</li>
          <li>Email</li>
        </ul>
</div>
</div>
     
    )
}

export default FooterContent