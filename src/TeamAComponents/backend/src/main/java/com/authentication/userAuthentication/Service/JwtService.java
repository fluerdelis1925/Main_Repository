// package com.authentication.userAuthentication.Service;

// import java.security.Key;
// import java.util.Date;
// import java.util.HashMap;
// import java.util.Map;
// import java.util.function.Function;

// import org.springframework.security.core.userdetails.UserDetails;
// import org.springframework.stereotype.Service;

// import io.jsonwebtoken.Claims;
// import io.jsonwebtoken.Jwts;
// import io.jsonwebtoken.SignatureAlgorithm;
// import io.jsonwebtoken.io.Decoders;
// import io.jsonwebtoken.security.Keys;

// @Service
// public class JwtService {
//     private static final String SECRET_KEY = "CuZZdZNZ2UVIIPLpX34fAJjixDYt1hV5";
//     // private long jwtExpiration = 3600000; // 1 HR
//     private long jwtExpiration = 3600000; // 10 Sec

//     public String extractUsername(String token) {
//         return extractClaim(token, Claims::getSubject);
//     }

//     public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
//         final Claims claim = extractAllClaims(token);
//         return claimsResolver.apply(claim);
//     }

//     private Claims extractAllClaims(String token) {
//         return Jwts
//                 .parserBuilder()
//                 .setSigningKey(getSignInKey())
//                 .build()
//                 .parseClaimsJws(token)
//                 .getBody();
//     }

//     private Key getSignInKey() {
//         byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
//         return Keys.hmacShaKeyFor(keyBytes);
//     }

//     // For Token Validation
//     public boolean isTokenValid(String token, UserDetails userDetails) {
//         final String username = extractUsername(token);
//         return (username.equals(userDetails.getUsername())) &&
//                 !isTokenExpired(token);
//     }

//     public boolean isTokenExpired(String token) {
//         return extractExpiration(token).before(new Date());
//     }

//     public Date extractExpiration(String token) {
//         return extractClaim(token, Claims::getExpiration);
//     }

//     // For Generating new Token
//     public String generateToken(UserDetails user) {
//         return generateToken(new HashMap<>(), user);
//     }

//     public String generateToken(Map<String, Object> extraClaims, UserDetails user) {
//         return buildToken(new HashMap<>(), user, jwtExpiration);
//     }

//     public String buildToken(
//             Map<String, Object> extraClaims,
//             UserDetails user,
//             long expiration) {
//         return Jwts
//                 .builder()
//                 .setClaims(extraClaims)
//                 .setSubject(user.getUsername())
//                 .setIssuedAt(new Date(System.currentTimeMillis()))
//                 .setExpiration(new Date(System.currentTimeMillis() + expiration))
//                 .signWith(getSignInKey(), SignatureAlgorithm.HS256)
//                 .compact();
//     }
// }